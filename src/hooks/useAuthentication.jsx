import { useContext, useState } from 'react';
import { VideoContextProvider } from '../context/VideoContext';
import loginApi from '../utils/login.api';
import { reducerTypes } from '../utils/reducerTypes';

const useAuthentication = () => {
  const { setLoading, state, dispatch } = useContext(VideoContextProvider);

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [isOpen, setIsOpen] = useState(state.modalOpened);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
    dispatch({ type: reducerTypes.TOGGLE_MODAL, payload: !isOpen });
  };
  const closeModal = () => {
    setOpacity(0);
    setIsOpen(false);
    dispatch({ type: reducerTypes.TOGGLE_MODAL, payload: false });
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const isAuthenticated = () => {
    const fromLocal = localStorage.getItem('isAuthenticated');

    let is = false;
    if (fromLocal === 'true') {
      is = true;
    } else {
      is = false;
    }
    return is;
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  };
  const login = (user, pwd) => {
    let result;
    setLoading(true);
    loginApi(user, pwd)
      .then((data) => {
        result = data;
        dispatch({ type: reducerTypes.LOGIN, payload: result });
        localStorage.setItem('user', JSON.stringify(result));
        localStorage.setItem('isAuthenticated', true);
        setLoading(false);
      })
      .catch(() => {
        result = false;
        dispatch({ type: reducerTypes.LOGIN, payload: result });
        localStorage.removeItem('user');
        localStorage.setItem('isAuthenticated', false);
        setLoading(false);
      });
    return result;
  };

  const modal = {
    toggleModal,
    closeModal,
    afterOpen,
    beforeClose,
    isOpen: state.modalOpened,
    opacity,
    setIsOpen,
  };

  return {
    login,
    userLogged: currentUser ?? state.userLogged,
    modal,
    isAuthenticated,
  };
};

export default useAuthentication;
