import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import ALink from '../../../a-link/a-link';
import AllPosts from '../../../all-posts/all-posts';

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
