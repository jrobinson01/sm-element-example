import form from './states/form';
import loading from './states/loading';
import success from './states/success';
import error from './states/error';

export default {
  initial:'form',
  states: {form, loading, error, success}
};
