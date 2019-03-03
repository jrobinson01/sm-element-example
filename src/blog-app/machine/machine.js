import home from './states/home.js';
import posts from './states/posts.js';
import view from './states/view.js';
import create from './states/create.js';
import login from './states/login.js';
import fourOhFour from './states/fourOhFour.js';

/** @type import('sm-element/sm-element').Machine */
const machine = {
  initial:'home',
  states: {home, posts, view, create, login, fourOhFour}
};

export default machine;
