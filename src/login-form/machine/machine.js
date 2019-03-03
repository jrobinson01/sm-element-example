import form from './states/form.js';
import loading from './states/loading.js';
import error from './states/error.js';
import success from './states/success.js';

export default {
  initial: 'form',
  states: {form, loading, error, success}
};
