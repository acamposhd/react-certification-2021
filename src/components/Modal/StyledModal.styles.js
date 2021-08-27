import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 25rem;
  border-radius: 5px;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bodyAccent};
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;
