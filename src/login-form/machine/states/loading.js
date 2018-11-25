import {html} from 'sm-element/sm-element';

export default {
  name: 'loading',
  onEntry() {
    // fake network request
    setTimeout(() => {
      if (this.username === 'admin' && this.password === 'password') {
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
    return html`<div>loading...</div>`;
  }
};
