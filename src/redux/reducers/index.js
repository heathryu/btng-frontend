import { combineReducers } from 'redux';
import statusPoint from './statusPoint';
import destinationAmount from './destinationAmount';

export default combineReducers({ statusPoint, destinationAmount });
