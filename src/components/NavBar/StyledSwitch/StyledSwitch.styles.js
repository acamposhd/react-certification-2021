import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
`;
export const CheckBoxLabel = styled.label`
  position: relative;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.toggleBackground};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
