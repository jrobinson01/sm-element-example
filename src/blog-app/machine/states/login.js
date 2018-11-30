// @ts-nocheck
import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import LoginForm from '../../../login-form/login-form.js';

/** @type import("sm-element/sm-element").State */
const state = {
  name: 'login',
  transitions: sharedTransitions.concat([
    {
      event:'logged_in',
      target: 'home',
      condition(detail) {
        // the login component dispatches an event based on setTimeout,
        // so can dispatch it after it's been removed from the dom.
        // ignore events that come from disconnected elements.
        return detail.event.currentTarget.isConnected;
      },
      effect(detail) {
        return detail;
      },
    }
  ]),

  render() {
    return html`<login-form @logged-in="${e => this.onLoggedIn(e)}"></login-form>`;
  },
};
export default state;
