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
        <header><h3>${selectedPost.title}</h3></header>
        <article>${selectedPost.content}</article>
      `
    }
    return html`post not found!`;
  },
};

export default state;
