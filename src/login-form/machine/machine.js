import form from './states/form';
import loading from './states/loading';
import error from './states/error';
import success from './states/success';

export default {
  initial: 'form',
  states: {form, loading, error, success}
};
