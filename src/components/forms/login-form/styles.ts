import styled from 'styled-components/macro';
import DGBYLogo from '../../../logo.svg';
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const FormLogo = styled.div`
  background-image: url('${DGBYLogo}');
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
  margin-bottom: 4rem;
`;

export const LoginFormBody = styled.form`
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffb210;
  border-radius: 12px;
`;

export const FormTitle = styled.h1`
  margin-bottom: 8rem;
  color: #0d0d0d;
  font-weight: 500;
`;
