import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 80%;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  color: ${({ theme }) => theme.text};
`;

export const FormInput = styled.input`
  align-items: flex-start;
  position: relative;
  width: 100%;
  font-size: 18px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: black;
  /* padding: 7px 33px; */
  color: black;
  cursor: text;
  font-weight: 600;
  text-align: left;
  padding: 10px;
  margin: 10px;
  background: #fafafa;

  &:active,
  &:focus {
    border: solid 1px #dbdbdb;
    box-shadow: 0px 0px 1px 0px black;
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  padding-left: 10px;
  margin-left: 10px;
`;

export const FormButton = styled.button`
  width: 50%;
  height: 40px;
  text-align: center;
  cursor: pointer;
  background: #800e13;
  color: white;
  margin-left: 25%;
  margin-top: 20px;
`;

export const StyledH2 = styled.h2`
  width: 50%;
  margin-left: 40%;
`;
export const StyledH4 = styled.h4`
  width: 100%;
  margin-left: 25%;
  margin-bottom: 50px;
  color: #800e13;
  visibility: ${({ error }) => (!error ? 'hidden' : 'visible')};
`;
