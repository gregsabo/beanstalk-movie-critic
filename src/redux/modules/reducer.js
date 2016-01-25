import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import auth from './auth';
import {reducer as form} from 'redux-form';
import critic from './critic';

export default combineReducers({
  router: routerStateReducer,
  critic,
  auth,
  form,
});
