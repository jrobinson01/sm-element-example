import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import ALink from '../../../a-link/a-link';

/** @type import("sm-element/sm-element").State */
const state = {
  name: 'posts',
  // @ts-ignore
  transitions: sharedTransitions.concat([]),
  render({posts}) {
    return html `
      <h5>
        <div class="container">
          All posts
        </div>
      </h5>
      <div class="container">
        <ul>
        ${posts.map(p => html`
          <li>
            <a-link href="/posts/${p.id}">${p.title}</a-link>
          </li>
          `)}
        </ul>
      </div>
    `
  }
};
export default state;
