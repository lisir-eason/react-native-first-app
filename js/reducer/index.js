import {combineReducers} from 'redux';

import themeReducer from './theme/index';

const reducer = combineReducers({
  themeReducer,
});

export default reducer;
