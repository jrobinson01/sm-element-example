export default {
  name: 'form',
  transitions: [
    {
      event: 'submit_form',
      target: 'loading',
      condition(detail) {
        return (detail.username && detail.password);
      }
    }
  ]
};
