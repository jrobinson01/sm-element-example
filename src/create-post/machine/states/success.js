import {html} from 'sm-element/sm-element';

export default {
  name: 'success',
  transitions: [],
  render({postId}) {
    return html`<div><a href="/posts/${postId}" @click="${e => this.onClickPost(e)}">View post</a></div>`;
  }
};
