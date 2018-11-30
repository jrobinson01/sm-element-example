/** @type import('sm-element/sm-element').State */
const state = {
  name: 'form',
  transitions: [
    {
      event: 'creating_post',
      target: 'loading',
    }
  ]
};
export default state;
