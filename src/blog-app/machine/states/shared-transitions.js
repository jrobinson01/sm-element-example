export default [
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
    event: 'create_post',
    target: 'create',
    /** @this {BlogApp} */
    condition() {
      return this.user.loggedIn === true;
    }
  },
  {
    event: 'create_post',
    target: 'home',
    /** @this {BlogApp} */
    condition() {
      return this.user.loggedIn !== true;
    },
    effect() {
      this.history.push('/');// fix url (TODO: causes a full page load?)
    }
  }
];
