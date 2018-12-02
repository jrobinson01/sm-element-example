import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import ViewPost from '../../../view-post/view-post';

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
