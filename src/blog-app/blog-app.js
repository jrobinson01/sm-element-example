import SMElement, {html} from 'sm-element/sm-element';
import machine from './machine/machine';
import routes from '../routing/routes';
import style from './style';
import ALink from '../a-link/a-link';

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
          {id:'1', title:'The first post', content:'blah blah blah'},
          {id:'2', title:'The second post', content:'blah blah blah blah blah'},
          {id:'3', title:'The third post', content:'blah blah blah blah blah'},
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
      if (route.title !== document.title) {
        document.title = route.title;
        this.send(route.event, route.detail);
      }
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
        if (route.title !== document.title) {
          document.title = route.title;
          this.send(route.event, route.detail);
        }
      }).catch((e) => {
        console.error('error resolving (client-side)', location.pathname);
        this.send('page_not_found');
      });
    });
    // listen for link clicks
    this.addEventListener('click-link', e => {
      const event = /** @type {CustomEvent} */ (e);
      this.history.push(event.detail.href);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render({user, posts}) {
    return html`
      ${style}
      <h1>
        <a-link href="/">A Blog!</a-link>
      </h1>
      ${this.currentStateRender(this.data)}
    `;
  }

  /**
   * @description event handler for a successful login
   * sends logged_in event
   * @param {CustomEvent} e
   */
  onLoggedIn(e) {
    this.send('logged_in', {
      user: {
        name:e.detail.username,
        loggedIn: true
      }
    });
  }

  /**
   * @description event handler for create-post component's attempt to create a post
   * @param {CustomEvent} e
   */
  onCreatePost(e) {
    this.send('create_post', {event:e});
  }

}


customElements.define('blog-app', BlogApp);
