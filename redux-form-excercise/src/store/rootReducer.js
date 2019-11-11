import { combineReducers } from 'redux';
import {reducer as formReducer }  from 'redux-form';

import { reducer as components } from './components/reducer';

export default combineReducers({
  components,
  form: formReducer
});
