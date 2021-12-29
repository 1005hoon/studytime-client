import React from 'react';
import { StyledNavbar } from './styles';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
  return <StyledNavbar>{props.children}</StyledNavbar>;
};

export default Navbar;
