/** @type Array<import('sm-element/sm-element').Transition>*/
// @ts-nocheck
const transitions = [
  {
    event:'transition_page',
    effect(detail) {
      const animEl = this.root.querySelector('#main');
      if (animEl){
        const fadeOutHandler = e => {
          // done fading out, switch pages and fade in.
          animEl.removeEventListener('animationend', fadeOutHandler);
          this.send(detail.animatedRouteData.event, detail.animatedRouteData.detail);
          animEl.setAttribute('fade-in', '');
          animEl.removeAttribute('fade-out');
        }
        animEl.addEventListener('animationend', fadeOutHandler);
        // add fade-out attribute
        animEl.setAttribute('fade-out', '');
        animEl.removeAttribute('fade-in');
      } else {
        // no main content, skipping
        console.log('no main content, skipping');
        this.send(detail.animatedRouteData.event, detail.animatedRouteData.detail);
      }
      return detail;
    }
  },

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
  {
    event: 'select_login',
    target: 'login',
  },
];

export default transitions;
