import React from 'react';
import { StyledRoundButton } from './styles';

export interface RoundButtonProps {
  active?: boolean;
  primary?: boolean;
}

const RoundButton: React.FC<RoundButtonProps> = (props) => {
  return <StyledRoundButton {...props}>{props.children}</StyledRoundButton>;
};

export default RoundButton;
