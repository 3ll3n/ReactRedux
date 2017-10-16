import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses //can use the short hand property names can be used - courses
});

export default rootReducer;