import {html} from 'sm-element/sm-element';
import ALink from '../../../a-link/a-link';

/** @type import('sm-element/sm-element').State */
const state = {
  name: 'fourOhFour',
  transitions: [
    {
      event: 'go_home',
      target: 'home'
    },
  ],
  render() {
    return html`
      <div>
        <h5>Oops! Page not found.</h5>
        <a-link href="/">home</a-link>
      </div>`;
  }
};

export default state;
