export default {
  name: 'form',
  transitions: [
    {
      event: 'creating_post',
      target: 'loading',
    }
  ]
};
