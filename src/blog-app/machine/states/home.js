import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import ALink from '../../../a-link/a-link';
import ViewPost from '../../../view-post/view-post';

/** @type import("sm-element/sm-element").State */
const state = {

  name:'home',

  transitions: sharedTransitions.concat([]),

  render({user, posts}) {
    return html`
      <view-post .post="${posts[0]}"></view-post>
    `
  }
};

export default state;
