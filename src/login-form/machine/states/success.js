export default {
  name: 'success',
  onEntry({username}) {
    // let our parent know we're done
    this.dispatchEvent(new CustomEvent('logged-in', {
      detail: {
        username: username
      }
    }));
  },
  transitions: []
};
