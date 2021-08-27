import React from 'react';
import { StyledModal } from './StyledModal.styles';

export const StyledModalComponent = (props) => {
  const { isOpen, opacity, toggleModal, afterOpen, beforeClose } = props;

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        {props.children}
      </StyledModal>
    </div>
  );
};
