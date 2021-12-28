import styled from 'styled-components/macro';
import { OAuthButtonProps } from '.';

export const Btn = styled.button<OAuthButtonProps>`
  display: flex;
  padding: 1rem 2rem;
  min-width: 250px;
  border-radius: 12px;
  align-items: center;
  background-color: ${({ provider }) =>
    provider === '구글' ? '#fff' : '#FEE500'};
`;

export const BtnLogo = styled.img`
  display: inline-block;
  width: 30px;
  margin-left: 5%;
  margin-right: 15px;
`;

export const BtnText = styled.p`
  font-size: 1.2em;
  font-weight: 600;
`;
