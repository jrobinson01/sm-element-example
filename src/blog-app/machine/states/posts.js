import sharedTransitions from './shared-transitions.js';
import {html} from '/web_modules/sm-element.js';
import ALink from '../../../a-link/a-link.js';
import AllPosts from '../../../all-posts/all-posts.js';

/** @type import("sm-element/sm-element").State */
const state = {
  name: 'posts',
  // @ts-ignore
  transitions: sharedTransitions.concat([]),
  render({posts}) {
    return html `
      <all-posts .posts="${posts}"></all-posts>
    `
  }
};
export default state;
