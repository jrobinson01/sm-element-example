export default {
  name: 'success',
  onEntry() {
    // let our parent know we're done
    this.dispatchEvent(new CustomEvent('logged-in', {
      detail: {
        username: this.username
      }
    }));
  },
  transitions: []
};
