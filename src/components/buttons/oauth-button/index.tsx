import React from 'react';
import { Btn, BtnLogo, BtnText } from './styles';
import KakaoLogo from '../../../assets/images/kakaotalk-logo.png';
import GoogleLogo from '../../../assets/images/google-logo.png';

export interface OAuthButtonProps {
  provider: '카카오' | '구글';
}

const OAuthButton: React.FC<OAuthButtonProps> = (props) => {
  return (
    <Btn provider={props.provider}>
      <BtnLogo src={props.provider === '구글' ? GoogleLogo : KakaoLogo} />
      <BtnText>{props.provider}로 시작하기</BtnText>
    </Btn>
  );
};

export default OAuthButton;
