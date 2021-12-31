import styled from 'styled-components/macro';
import Chevron from '../../../assets/images/chevron_down.svg';

export const StyledSelectContainer = styled.div`
  display: flex;
`;

export const StyledSelect = styled.select`
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-image: url('${Chevron}');
  background-repeat: no-repeat;
  background-size: 30px contain;

  background-position: 99% 50%;

  &:focus {
    border: none;
    outline: none;
  }
`;
