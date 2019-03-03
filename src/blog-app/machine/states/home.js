import sharedTransitions from './shared-transitions.js';
import {html} from '/web_modules/sm-element.js';
import ALink from '../../../a-link/a-link.js';
import ViewPost from '../../../view-post/view-post.js';

/** @type import("sm-element/sm-element").State */
const state = {

  name:'home',

  transitions: sharedTransitions.concat([]),

  render({user, posts}) {
    return html`
      <view-post .post="${posts[0]}" preview></view-post>
    `
  }
};

export default state;
