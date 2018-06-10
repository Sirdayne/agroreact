import { combineReducers } from 'redux';
import fullname from './fullname';
import fields from './fields';

export default combineReducers({
  fullname,
  fields
})