import sharedTransitions from './shared-transitions.js';
import {html} from '/web_modules/sm-element.js';
import ViewPost from '../../../view-post/view-post.js';

/** @type import("sm-element/sm-element").State */
const state = {
  name: 'view',
  transitions: sharedTransitions.concat([]),
  render({posts, selectedPostId}) {
    const selectedPost = posts.find(p => p.id === selectedPostId);
    if (selectedPost){
      return html`
        <view-post .post="${selectedPost}"></view-post>
      `
    }
    return html`post not found!`;
  },
};

export default state;
