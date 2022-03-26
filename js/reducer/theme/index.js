import Types from '../../action/types';

const defaultState = {
  theme: 'red',
};

const ThemeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.THEME_CHANGE:
      return {...state, theme: action.theme};
    default:
      return state;
  }
};

export default ThemeReducer;
