import sharedTransitions from './shared-transitions';
import {html} from 'sm-element/sm-element';
import LoginForm from '../../../login-form/login-form.js';

export default {
  name: 'login',
  transitions: sharedTransitions.concat([]),
  render({user}) {
    return html`<login-form @logged-in="${e => this.onLoggedIn(e)}"></login-form>`;
  }
};
