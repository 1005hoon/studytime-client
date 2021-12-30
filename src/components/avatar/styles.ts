import styled from 'styled-components';

export const StyledAvatar = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
