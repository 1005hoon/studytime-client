import React from 'react';
import { StyledRoundButton } from './styles';

export interface RoundButtonProps {
  active?: boolean;
  primary?: boolean;
  onClick?: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = (props) => {
  return (
    <StyledRoundButton onClick={props?.onClick} {...props}>
      {props.children}
    </StyledRoundButton>
  );
};

export default RoundButton;
