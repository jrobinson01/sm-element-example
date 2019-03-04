import SMElement, {html} from '/web_modules/sm-element.js';
import UniversalRouter from '/web_modules/universal-router.js';
import machine from './machine/machine.js';
import routes from '../routing/routes.js';
import style from './style.js';
import ALink from '../a-link/a-link.js';
import posts from '../data.js';
import RecentPosts from '../recent-posts/recent-posts.js';

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
  }

  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore global
    this.router = new UniversalRouter(routes);
    // handle changes to the url directly
    this.router.resolve({pathname: window.location.pathname})
    .then(this.handleRoute.bind(this))
    .catch((e) => {
      console.error('error resolving (direct url)', location.pathname);
      this.send('page_not_found');
    });

    // handle pop-state events
    window.onpopstate = () => {
      console.log('onPopState');
      this.router.resolve({pathname: window.location.pathname})
      .then(this.handleRoute.bind(this))
      .catch((e) => {
        console.error('error resolving (client-side)', window.location.pathname);
        this.send('page_not_found');
      });
    };
    window.onpopstate();
    history.pushState(null, null, window.location.pathname);

    // listen for link clicks
    window.addEventListener('click', e => {
      const event = /** @type {CustomEvent} */ (e);
      const target = event.path.find(el => el.tagName === 'A');
      // event.preventDefault();
      if (target) {
        // prevent default if not external or new-tab click
        const newTab = event.metaKey || event.ctrlKey;
        const isExternal = target.pathname.startsWith('http');
        if (!newTab && !isExternal) {
          event.preventDefault();
        }
        window.history.pushState(null, target.textContent, target.href);// TODO: should move to handleRoute?
        this.router.resolve({pathname: window.location.pathname})
        .then(this.handleRoute.bind(this))
        .catch((e) => {
          console.error('error resolving (client-side)', window.location.pathname);
          this.send('page_not_found');
        });
      }
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
