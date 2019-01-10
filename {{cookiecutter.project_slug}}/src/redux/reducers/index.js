import { combineReducers } from 'redux';

import NavigationReducer from './Navigation';

const reducers = combineReducers({
  navigation: NavigationReducer,
});

export default reducers;
