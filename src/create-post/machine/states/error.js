import {html} from 'sm-element/sm-element';

export default {
  name: 'error',
  transitions: [
    {
      event: 'creating_post',
      target: 'loading',
    }
  ],
  render() {
    return html`<div>there was an error creating your post.</div>`
  }
};
