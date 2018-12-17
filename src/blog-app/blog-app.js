import SMElement, {html} from 'sm-element/sm-element';
import machine from './machine/machine';
import routes from '../routing/routes';
import style from './style';
import ALink from '../a-link/a-link';
import posts from '../data';
import RecentPosts from '../recent-posts/recent-posts';

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
        value: () => posts
      },
      animatedRouteData: {
        type: Object
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
    .then(this.handleRoute.bind(this)).catch((e) => {
      console.error('error resolving (direct url)', location.pathname);
      this.send('page_not_found');
    });
    // @ts-ignore global
    this.history = History.createBrowserHistory();
    // listen for history changes
    this.history.listen(event => {
      this.router.resolve({pathname: event.pathname})
      .then(this.handleRoute.bind(this)).catch((e) => {
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

  handleRoute(route) {
    document.title = route.title;
    this.send('transition_page', {
      animatedRouteData: route
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render({user, posts}) {
    return html`
      ${style}
      <header>
        <a-link href="/">A Blog!</a-link>
        <div>
          an sm-element demo application
        </div>
      </header>
      <article id="main">
        ${this.currentStateRender(this.data)}
      </article>
      <article id="menu">
        <recent-posts .posts="${posts}"></recent-posts>
      </article>
      <footer>
        <a-link button href="/posts">archive</a-link>
        ${!user.loggedIn ? html`<a-link button href="/login">login</a-link>` : ''}
        ${user.loggedIn ? html`<a-link button href="/create">New post</a-link>` : ''}
      </footer>
    `;
  }

  /**
   * @description event handler for a successful login
   * sends logged_in event
   * @param {CustomEvent} e
   */
  onLoggedIn(e) {
    this.send('logged_in', {
      event: e,
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
