import {html} from 'sm-element/sm-element';

export default {
  name: 'fourOhFour',
  transitions: [
    {
      event: 'go_home',
      target: 'home'
    },
  ],
  render() {
    return html`<div>Oops! <a href="/" @click="${e => this.clickLink(e)}">home</a></div>`;
  }
};
