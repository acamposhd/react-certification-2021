import React from 'react';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './StyledSwitch.styles';

const Switch = ({ onChange, toggled }) => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox
          checked={toggled}
          id="checkbox"
          type="checkbox"
          onChange={() => {
            onChange();
          }}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </>
  );
};

export default Switch;
