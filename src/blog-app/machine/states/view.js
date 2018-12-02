import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';

/** @type import("sm-element/sm-element").State */
const state = {
  name: 'view',
  transitions: sharedTransitions.concat([]),
  render({posts, selectedPostId}) {
    const selectedPost = posts.find(p => p.id === selectedPostId);
    if (selectedPost){
      return html`
        <h5>
          <div class="container">
            ${selectedPost.title}
          </div>
        </h5>
        <article>
          <div class="container">
            ${selectedPost.content}
          </div>
        </article>
      `
    }
    return html`post not found!`;
  },
};

export default state;
