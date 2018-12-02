import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import ALink from '../../../a-link/a-link';

/** @type import("sm-element/sm-element").State */
const state = {
  name:'home',
  transitions: sharedTransitions.concat([
    /** @type import("sm-element/sm-element").State */
    {
      event: 'select_login',
      target: 'login',
    },
  ]),
  render({user, posts}) {
    return html`
      <div id="blog-app-home">
        <h5>
          <div class="container">
            Recent posts
          </div>
        </h5>
        <div class="container">
          <ul>
          ${posts.slice(0,2).map(p => html`<li>
            <a-link href="/posts/${p.id}">${p.title}</a-link>
            </li>`)}
          </ul>
          <a-link href="/posts" class=button>all posts</a-link>
          ${!user.loggedIn ? html`<a-link href="/login" class=button>login</a-link>` : ''}
          ${user.loggedIn ? html`<a-link href="/create" class=button>New post</a-link>` : ''}
        </div>
      </div>
    `
  }
};

export default state;
