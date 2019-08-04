import { combineReducers } from 'redux';
import statusPoint from './statusPoint';
import destinationAmount from './destinationAmount';
import transferDetails from './transferDetails';

export default combineReducers({ statusPoint, destinationAmount, transferDetails });
