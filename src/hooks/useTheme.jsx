import { useContext } from 'react';
import { ThemeContextProvider } from '../context/ThemeContext';
import { reducerTypes } from '../utils/reducerTypes';

const useTheme = () => {
  const { state, dispatch } = useContext(ThemeContextProvider);
  const { activeTheme } = state;

  const themeToggler = () => {
    dispatch({ type: reducerTypes.TOGGLE_THEME });
  };

  return {
    themeToggler,
    activeTheme,
  };
};

export default useTheme;
