import React from 'react';
import {
  StyledInputFormBody,
  StyledInputFormContainer,
  StyledInputFormGroup,
} from './styles';

interface InputFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
interface InputFormComposition {
  Group: React.FC;
}

const InputForm: React.FC<InputFormProps> & InputFormComposition = (props) => {
  return (
    <StyledInputFormContainer>
      <StyledInputFormBody onSubmit={props?.onSubmit}>
        {props.children}
      </StyledInputFormBody>
    </StyledInputFormContainer>
  );
};

InputForm.Group = function InputFormGroup(props) {
  return <StyledInputFormGroup>{props.children}</StyledInputFormGroup>;
};
export default InputForm;
