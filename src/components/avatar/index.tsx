import React from 'react';
import { StyledAvatar } from './styles';

interface AvatarProps {
  alt: string;
  src: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return <StyledAvatar src={props.src}></StyledAvatar>;
};

export default Avatar;
