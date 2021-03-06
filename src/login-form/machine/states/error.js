import {html} from '/web_modules/sm-element.js';

export default {
  name: 'error',
  transitions: [
    {
      event: 'try_again',
      target: 'form',
    }
  ],
  render() {
    return html`<div id="error">Sorry, username or password is incorrect.</div>`;
  }
};
