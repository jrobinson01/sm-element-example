import SMElement, {html} from 'sm-element/sm-element';
import machine from './machine/machine';
import routes from '../routing/routes.js';
import style from './style.js';

class BlogApp extends SMElement {

  static get machine() {
    return machine;
  }

  static get properties() {
    return {
      user: {
        type: Object,
        value: {loggedIn: false, name:''}
      },
      selectedPostId: {
        type: String,
      },
      posts: {
        type: Array,
        value: () => [
          {id:'1', title:'First post', content:'blah blah blah'},
          {id:'2', title:'Second post', content:'blah blah blah blah blah'},
          {id:'3', title:'Third post', content:'blah blah blah blah blah'},
        ]
      }
    }
  }

  constructor() {
    super();
    this.router;
    this.history;
  }

  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore global
    this.router = new UniversalRouter(routes);
    // handle changes to the url directly
    this.router.resolve({pathname: location.pathname})
    .then(route => {
      document.title = route.title;
      this.send(route.event, route.detail);
    }).catch((e) => {
      console.error('error resolving (direct url)', location.pathname);
      this.send('page_not_found');
    });
    // @ts-ignore global
    this.history = History.createBrowserHistory();
    // listen for history changes
    this.history.listen(event => {
      this.router.resolve({pathname: event.pathname})
      .then(route => {
        document.title = route.title;
        this.send(route.event, route.detail);
      }).catch((e) => {
        console.error('error resolving (client-side)', location.pathname);
        this.send('page_not_found');
      });
    });
  }


  render({user, posts}) {
    return html`
      ${style}
      <h1><a href="/" @click="${e => this.clickLink(e)}">A Blog!</a></h1>
      ${this.currentStateRender(this.data)}
    `;
  }
  /**
   * @description handle clicking links
   * @param {Event} e
   */
  clickLink(e) {
    e.preventDefault();
    this.history.push(e.currentTarget.getAttribute('href'));
  }

  /**
   * @description event handler for a successful login
   * @param {CustomEvent} e
   */
  onLoggedIn(e) {
    // interestingly, if the user attempts a login,
    // but clicks the browser back button while loading, once successful
    // we still log them in. Not really an issue in this case, but if it were,
    // we could ignore the event if we're no longer in the 'login' state.
    // TODO: is the login form leaking memory/listeners because we have
    // an active event listener?

    // update data
    this.user = {name: e.detail.username, loggedIn: true};
    // go back home!
    this.history.push('/');
  }

  /**
   * @description event handler for create-post component's attempt to create a post
   * @param {CustomEvent} e
   */
  onCreatePost(e) {
    const newPost = Object.assign({}, e.detail);
    e.detail.responder = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (newPost.title === 'error') {
          reject('an error occured');
        } else {
          // create a new post!
          const createdPost = {id:String(this.posts.length+1), title:newPost.title, content:newPost.content};
          this.posts = this.posts.concat([createdPost]);
          console.log('updated posts?', this.posts);
          resolve(createdPost);
        }
      }, 2000);
    });
  }

  onViewNewPost(e) {
    this.send('go_home');
    this.history.push(`/posts/${e.detail.postId}`);
  }
}


customElements.define('blog-app', BlogApp);
