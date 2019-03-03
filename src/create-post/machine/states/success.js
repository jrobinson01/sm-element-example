import {html} from '/web_modules/sm-element.js';
import Alink from '../../../a-link/a-link.js';

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
