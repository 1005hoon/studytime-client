import styled from 'styled-components';

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNickname = styled.p`
  padding-left: 20px;
`;

export const StyledAvatar = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
