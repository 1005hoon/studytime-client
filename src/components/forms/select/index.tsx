import React from 'react';
import { StyledSelect, StyledSelectContainer } from './styles';

interface SelectProps {}
interface SelectComposition {}

const Select: React.FC<SelectProps> & SelectComposition = (props) => {
  return (
    <StyledSelectContainer>
      <StyledSelect>{props.children}</StyledSelect>
    </StyledSelectContainer>
  );
};

export default Select;
