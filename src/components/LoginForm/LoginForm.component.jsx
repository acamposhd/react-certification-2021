import React, { useContext, useState } from 'react';
import { VideoContextProvider } from '../../context/VideoContext';
import useAuthentication from '../../hooks/useAuthentication';
import Spinner from '../Spinner/Spinner.component';
import {
  FormButton,
  FormContainer,
  FormInput,
  StyledH2,
  StyledH4,
  StyledLabel,
} from './LoginForm.styles';

export const LoginForm = () => {
  const { isLoading, state } = useContext(VideoContextProvider);
  const { login } = useAuthentication();
  const [loginData, setLoginData] = useState({
    user: '',
    pwd: '',
  });
  const handleChangeData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let tempObject = {};
    setLoginData((data) => {
      if (name && value) {
        tempObject = { ...data, [name]: value };
      } else {
        tempObject = { ...data };
      }
      return tempObject;
    });
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <FormContainer>
          <StyledH2> Login</StyledH2>
          <StyledLabel htmlFor="user"> Username</StyledLabel>
          <FormInput
            className="label"
            id="user"
            name="user"
            onChange={(e) => handleChangeData(e)}
          />
          <StyledLabel htmlFor="pwd"> Password</StyledLabel>
          <FormInput
            className="label"
            id="pwd"
            name="pwd"
            type="password"
            onChange={(e) => handleChangeData(e)}
          />
          <FormButton onClick={() => login(loginData.user, loginData.pwd)}>
            Login
          </FormButton>
          <StyledH4 error={state.loginError}>Opps datos incorrectos</StyledH4>
        </FormContainer>
      )}
    </>
  );
};
