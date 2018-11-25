import {html} from 'sm-element/sm-element';

export default {
  name: 'error',
  transitions: [
    {
      event: 'try_again',
      target: 'form'
    }
  ],
  render() {
    return html`<div>Sorry, username or password is incorrect.</div>`;
  }
};
