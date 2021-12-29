import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const StyledSidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  min-width: 250px;
  background-color: #0d0d0d;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 55px;
  border-bottom: 1px solid #31363e;
  border-right: 1px solid #31363e;
  margin-bottom: 20px;
  h1 {
    font-size: 18px;
  }
`;

export const StyledBody = styled.ul`
  height: 100%;
`;

export const StyledList = styled.li``;

export const StyledLink = styled(NavLink).attrs({
  activeclassname: 'active',
})`
  width: 100%;
  display: inline-block;
  padding: 9px 33px;
  color: #525b69;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #b3b9bc;
  }

  &.active {
    color: #fff;
  }
`;

export const StyledFooter = styled.footer`
  min-height: 55px;
  border-top: 1px solid #31363e;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 12px;
  }
`;
