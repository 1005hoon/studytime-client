import React from 'react';
import {
  StyledInputFormBody,
  StyledInputFormContainer,
  StyledInputFormGroup,
} from './styles';

interface InputFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  width?: string;
}
interface InputFormComposition {
  Group: React.FC<{ justify?: boolean }>;
}

const InputForm: React.FC<InputFormProps> & InputFormComposition = (props) => {
  return (
    <StyledInputFormContainer width={props.width ?? ''}>
      <StyledInputFormBody onSubmit={props?.onSubmit}>
        {props.children}
      </StyledInputFormBody>
    </StyledInputFormContainer>
  );
};

InputForm.Group = function InputFormGroup(props) {
  return (
    <StyledInputFormGroup justify={props.justify}>
      {props.children}
    </StyledInputFormGroup>
  );
};
export default InputForm;
