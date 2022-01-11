import styled from 'styled-components/macro';
import { RoundButtonProps } from '.';

export const ButtonContainer = styled.div`
  text-align: end;
  margin: 1rem 0 2rem;
`;
export const StyledRoundButton = styled.button<RoundButtonProps>`
  display: inline-block;
  position: relative;
  border: 2px solid transparent;
  outline: none;
  padding: 0.7rem 2rem;
  width: ${({ width }) => (width ? width : '')};
  background-color: ${(props) => (props.primary ? '#6800FF' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#FF8910')};
  border-radius: 32px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.47px;
  padding: 10px 35px;
  transition: background-color 0.3s ease;

  &:disabled {
    border-color: #b5bfc4;
    cursor: not-allowed;
    span {
      color: #b5bfc4;
    }
  }

  &:hover:not(:disabled) {
    border: ${(props) =>
      props.primary ? '2px solid  #fff' : '2px solid  #ff8910'};
    cursor: pointer;
  }

  :active {
    top: 1px;
    left: 1px;
  }
  + button {
    margin-left: 5px;
  }
`;
