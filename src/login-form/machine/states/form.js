export default {
  name: 'form',
  transitions: [
    {
      event: 'submit_form',
      target: 'loading',
      /**
       * @param {Object<string, any>} detail
       * @return {boolean}
       */
      condition(detail) {
        return (detail.username && detail.password) && detail.username.length > 3;
      },
      /**
       * @return {Object<string, any>}
       */
      effect() {
        return {usernameError: ''};
      }
    },
    {
      event: 'submit_form',
      target: 'form',
      /**
       * @param {Object<string, any>} detail
       * @return {boolean}
       */
      condition(detail) {
        return (detail.username && detail.password) && detail.username.length <= 3;
      },
      /**
       * @return {Object<string, any>}
       */
      effect() {
        return {usernameError: 'name is too short'};
      }
    }
  ],
};
