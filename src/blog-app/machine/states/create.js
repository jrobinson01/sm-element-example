import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import CreatePost from '../../../create-post/create-post.js';

export default {
  name: 'create',
  transitions: sharedTransitions.concat([]),
  render() {
    return html`<create-post @create-post="${e => this.onCreatePost(e)}" @view-new-post="${e => this.onViewNewPost(e)}"></create-post>`;
  }
};
