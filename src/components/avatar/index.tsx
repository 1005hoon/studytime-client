import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledAvatar, StyledAvatarContainer, StyledNickname } from './styles';

interface AvatarProps {
  src: string;
  nickname: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar
        src={
          props.src ||
          `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 20)}`
        }
      />
      <StyledNickname>{props.nickname}</StyledNickname>
    </StyledAvatarContainer>
  );
};

export default Avatar;
