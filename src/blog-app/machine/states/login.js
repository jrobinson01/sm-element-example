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
