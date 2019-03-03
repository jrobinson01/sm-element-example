import {html} from '/web_modules/sm-element.js';
import ProgressWheel from '../../../progress-wheel/progress-wheel.js';
export default {
  name: 'loading',
  onEntry({username, password}) {
    // fake network request
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        this.send('authenticated');
      } else {
        this.send('unauthenticated', {username:'', password:''});
      }
    }, 2000);
  },
  transitions: [
    {
      event: 'authenticated',
      target: 'success',
      effect(detail) {
        return detail;
      }
    },
    {
      event: 'unauthenticated',
      target: 'error',
      effect(detail) {
        return detail;
      }
    }
  ],
  render() {
    return html`<progress-wheel></progress-wheel>`;
  }
};
