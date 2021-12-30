import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const StyledPaginationContainer = styled.nav`
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaging = styled.ul`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPageItem = styled.li<{ isActive: boolean }>`
  color: #fff;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
`;

export const StyledPageLink = styled(RouterLink)`
  display: inline-block;
  padding: 0.5rem;
`;
