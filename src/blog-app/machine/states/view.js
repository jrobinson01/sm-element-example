import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';

export default {
  name: 'view',
  transitions: sharedTransitions.concat([]),
  render({posts, selectedPostId}) {
    const selectedPost = posts.find(p => p.id === selectedPostId);
    return html`
      <header><h3>${selectedPost.title}</h3></header>
      <article>${selectedPost.content}</article>
    `
  },
};
