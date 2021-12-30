import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const StyledPaginationContainer = styled.nav`
  margin-top: 40px;
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaging = styled.ul`
  width: 100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPageItem = styled.li<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#fff' : '#657177')};
  list-style: none;
`;

export const StyledPageLink = styled(RouterLink)`
  display: inline-block;
  padding: 0.5rem;
  text-decoration: none;
`;
