import {html} from 'sm-element/sm-element';

export default {
  name: 'loading',
  transitions: [
    {
      event:'create_success',
      target: 'success',
      effect({id}) {
        return {postId: id};
      }
    },
    {
      event:'create_error',
      target: 'error',
    }
  ],
  render() {
    return html`<div>loading...</div>`;
  }
};
