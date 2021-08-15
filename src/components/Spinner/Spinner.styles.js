import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
to{
    transform: rotate(360deg);
}
`;

const StyledSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  margin-top: 40vh;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.toggleBackground};
  animation: ${spinner} 0.6s linear infinite;
`;

export default StyledSpinner;
