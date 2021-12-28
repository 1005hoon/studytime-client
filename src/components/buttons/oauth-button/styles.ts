import styled from 'styled-components/macro';
import { OAuthButtonProps } from '.';

export const Btn = styled.button<OAuthButtonProps>`
  display: flex;
  padding: 1rem 2rem;
  width: 250px;
  border-radius: 12px;
  align-items: center;
  background-color: ${({ provider }) =>
    provider === '구글' ? '#fff' : '#FEE500'};
  margin-top: 1rem;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0 0);
    cursor: pointer;
  }

  &:active {
    background-image: none;
  }
`;

export const BtnLogo = styled.img`
  display: inline-block;
  width: 25px;
  margin-left: 5%;
  margin-right: 15px;
`;

export const BtnText = styled.p`
  font-size: 1.2em;
`;
