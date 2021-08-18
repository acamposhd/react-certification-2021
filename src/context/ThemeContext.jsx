import React, { useReducer } from 'react';
import { reducerTypes } from '../utils/reducerTypes';

export const ThemeContextProvider = React.createContext();
const currentTheme = localStorage.getItem('theme');
const initialState = {
  activeTheme: currentTheme ?? 'light',
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case reducerTypes.TOGGLE_THEME: {
      const activeTheme = currentState.activeTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', activeTheme);
      return {
        ...currentState,
        activeTheme,
      };
    }
    default:
      return currentState;
  }
};

const ThemeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContextProvider.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ThemeContextProvider.Provider>
  );
};

export default ThemeContext;
