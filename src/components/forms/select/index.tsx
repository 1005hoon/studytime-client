import React from 'react';
import { StyledSelect, StyledSelectContainer } from './styles';

interface SelectProps {
  value?: string | number;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
}
interface SelectComposition {}

const Select: React.FC<SelectProps> & SelectComposition = (props) => {
  return (
    <StyledSelectContainer>
      <StyledSelect
        name={props.name}
        onChange={props?.onChange}
        value={props.value}
        defaultValue=''
      >
        <option hidden value=''>
          ------
        </option>
        {props.children}
      </StyledSelect>
    </StyledSelectContainer>
  );
};

export default Select;
