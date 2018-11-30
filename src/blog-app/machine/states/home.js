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
      <h5>Recent posts</h4>
      <ul>
      ${posts.slice(0,2).map(p => html`<li>
        <a-link href="/posts/${p.id}">${p.title}</a-link>
        </li>`)}
      </ul>
      <a-link href="/posts">all posts</a-link>
      ${!user.loggedIn ? html`<a-link href="/login">login</a-link>` : ''}
      ${user.loggedIn ? html`<a-link href="/create">New post</a-link>` : ''}
    `
  }
};

export default state;
