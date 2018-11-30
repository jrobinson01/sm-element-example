import {html} from 'sm-element/sm-element';
import Alink from '../../../a-link/a-link';

export default {
  name: 'success',
  transitions: [],
  render({postId}) {
    return html`
      <div>
        <a-link href="/posts/${postId}">View post</a-link>
      </div>`;
  }
};
