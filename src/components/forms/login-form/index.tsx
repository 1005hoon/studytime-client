import React from 'react';
import { FormContainer, FormLogo, FormTitle, LoginFormBody } from './styles';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  return (
    <FormContainer>
      <FormLogo />
      <LoginFormBody>
        <FormTitle>동기부여 | 어드민 로그인</FormTitle>
        {props.children}
      </LoginFormBody>
    </FormContainer>
  );
};

export default LoginForm;
