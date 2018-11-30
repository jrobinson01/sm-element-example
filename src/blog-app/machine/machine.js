import home from './states/home';
import posts from './states/posts';
import view from './states/view';
import create from './states/create';
import login from './states/login';
import fourOhFour from './states/fourOhFour';

/** @type import('sm-element/sm-element').Machine */
const machine = {
  initial:'home',
  states: {home, posts, view, create, login, fourOhFour}
};

export default machine;
