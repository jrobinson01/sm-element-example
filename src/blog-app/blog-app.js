import SMElement, {html} from 'sm-element/sm-element';
import LoginForm from '../login-form/login-form.js';
import CreatePost from '../create-post/create-post.js';

import routes from '../routing/routes.js';

const universalTransitions = [
  {
    event: 'go_home',
    target: 'home'
  },
  {
    event: 'select_posts',
    target: 'posts',
  },
  {
    event:'page_not_found',
    target: 'fourOhFour'
  },
  {
    event: 'create_post',
    target: 'create',
    condition() {
      return this.user.loggedIn === true;
    }
  },
  {
    event: 'create_post',
    target: 'home',
    condition() {
      return this.user.loggedIn !== true;
    },
    effect() {
      this.history.push('/');// fix url (TODO: causes a full page load?)
    }
  }
]

class BlogApp extends SMElement {
  static get machine() {
    return {
      initial:'home',
      states: {
        home:{
          name:'home',
          transitions: universalTransitions.concat([
            {
              event: 'view_post',
              target: 'view',
              effect(detail) {
                console.log('view_post event', detail);
                return {selectedPostId: detail.postId};
              }
            },
            {
              event: 'select_login',
              target: 'login',
            },
          ]),
          render({user, posts}) {
            return html`
              <h5>Recent posts</h4>
              <ul>
              ${posts.slice(0,2).map(p => html`<li>
                <a href="/posts/${p.id}" @click="${e => this.clickLink(e, p.id)}">${p.title}</a>
                </li>`)}
              </ul>
              <a href="/posts" @click="${e => this.clickLink(e)}">all posts</a>
              ${!user.loggedIn ? html`<a href="/login" @click="${e => this.clickLink(e)}">login</a>` : ''}
              ${user.loggedIn ? html`<a href="/create" @click="${e => this.clickLink(e)}">New post</a>` : ''}
            `
          }
        },
        posts: {
          name: 'posts',
          transitions: universalTransitions.concat([
            {
              event: 'view_post',
              target: 'view',
              effect(detail) {
                console.log('view_post event', detail);
                return {selectedPostId: detail.postId};
              }
            },
          ]),
          render({posts}) {
            return html `
              <h5>All posts</h5>
              <ul>
              ${posts.map(p => html`<li>
                <a href="/posts/${p.id}" @click="${e => this.clickLink(e)}">${p.title}</a>
                </li>`)}
              </ul>
            `
          }
        },
        view: {
          name: 'view',
          transitions: universalTransitions.concat([]),
          render({posts, selectedPostId}) {
            const selectedPost = posts.find(p => p.id === selectedPostId);
            return html`
              <header><h3>${selectedPost.title}</h3></header>
              <article>${selectedPost.content}</article>
            `
          }
        },
        login: {
          name: 'login',
          transitions: universalTransitions.concat([]),
          render({user}) {
            return html`<login-form @logged-in="${e => this.onLoggedIn(e)}"></login-form>`;
          }
        },
        create: {
          name: 'create',
          transitions: universalTransitions.concat([]),
          render() {
            return html`<create-post @create-post="${e => this.onCreatePost(e)}" @view-new-post="${e => this.onViewNewPost(e)}"></create-post>`;
          }
        },
        fourOhFour: {
          name: 'fourOhFour',
          transitions: [
            {
              event: 'go_home',
              target: 'home'
            },
          ],
          render() {
            return html`<div>Oops! <a href="/" @click="${e => this.clickLink(e)}">home</a></div>`;
          }
        }
      }
    };
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

  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore
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
    // @ts-ignore
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
      <h3><a href="/" @click="${e => this.clickLink(e)}">A Blog!</a></h3>
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
    console.log('onCreatePost!', e);
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
