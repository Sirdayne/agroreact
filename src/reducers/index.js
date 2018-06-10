import { combineReducers } from 'redux';
import fullname from './fullname';
import entities from './entities';

export default combineReducers({
  fullname,
  entities
})