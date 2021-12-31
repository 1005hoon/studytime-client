import React from 'react';
import {
  StyledInputFormBody,
  StyledInputFormContainer,
  StyledInputFormGroup,
} from './styles';

interface InputFormProps {}
interface InputFormComposition {
  Group: React.FC;
}

const InputForm: React.FC<InputFormProps> & InputFormComposition = (props) => {
  return (
    <StyledInputFormContainer>
      <StyledInputFormBody>{props.children}</StyledInputFormBody>
    </StyledInputFormContainer>
  );
};

InputForm.Group = function InputFormGroup(props) {
  return <StyledInputFormGroup>{props.children}</StyledInputFormGroup>;
};
export default InputForm;
