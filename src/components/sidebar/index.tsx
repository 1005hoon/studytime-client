import React from 'react';
import {
  StyledBody,
  StyledFooter,
  StyledHeader,
  StyledLink,
  StyledList,
  StyledSidebar,
} from './styles';

interface SidebarProps {}
interface SidebarComposition {
  Header: React.FC;
  Body: React.FC;
  Link: React.FC<SidebarLinkProps>;
  Footer: React.FC;
}

const Sidebar: React.FC<SidebarProps> & SidebarComposition = (props) => {
  return <StyledSidebar>{props.children}</StyledSidebar>;
};

Sidebar.Header = function SidebarHeader({ children }) {
  return (
    <StyledHeader>
      {children ? children : <h1>동기부여 어드민</h1>}
    </StyledHeader>
  );
};

Sidebar.Body = function SidebarBody({ children }) {
  return <StyledBody>{children}</StyledBody>;
};

interface SidebarLinkProps {
  to: string;
}
Sidebar.Link = function SidebarLink(props) {
  return (
    <StyledList>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </StyledList>
  );
};

Sidebar.Footer = function SidebarFooter(props) {
  return (
    <StyledFooter>
      {props.children ? props.children : <p>동기부여</p>}
    </StyledFooter>
  );
};
export default Sidebar;
