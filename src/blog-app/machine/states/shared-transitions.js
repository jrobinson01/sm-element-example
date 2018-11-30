/** @type Array<import('sm-element/sm-element').Transition>*/
const transitions = [
  {
    event: 'go_home',
    target: 'home'
  },
  {
    event: 'select_posts',
    target: 'posts',
  },
  {
    event:'page_not_found',
    target: 'fourOhFour'
  },
  {
    event: 'go_create',
    target: 'create',
    /** @this {BlogApp} */
    condition() {
      return this.user.loggedIn === true;
    }
  },
  {
    event: 'go_create',
    target: 'home',
    /** @this {BlogApp} */
    condition() {
      return this.user.loggedIn !== true;
    },
  },
  {
    event: 'view_post',
    target: 'view',
    effect(detail) {
      return {selectedPostId: detail.postId};
    }
  },
];

export default transitions;
