import changenum from './updown';
import cartslice from '../cartslice';
import {combineReducers} from 'redux';

const  rootReducer = combineReducers({
    changenum,
    cartslice,
})

export default rootReducer;
