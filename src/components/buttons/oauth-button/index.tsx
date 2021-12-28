import React from 'react';
import { Btn, BtnLogo, BtnText } from './styles';
import KakaoLogo from '../../../assets/images/kakaotalk-logo.png';
import GoogleLogo from '../../../assets/images/google-logo.svg';
import { LOGIN_OPTION } from '../../../utils/constants';

export interface OAuthButtonProps {
  provider: LOGIN_OPTION;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const OAuthButton: React.FC<OAuthButtonProps> = (props) => {
  return (
    <Btn provider={props.provider} onClick={props.onClick}>
      <BtnLogo
        src={props.provider === LOGIN_OPTION.GOOGLE ? GoogleLogo : KakaoLogo}
      />
      <BtnText>{props.provider}로 시작하기</BtnText>
    </Btn>
  );
};

export default OAuthButton;
