import React from 'react';
import { StyledSidebar } from './styles';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <StyledSidebar>
      <h1>동기부여 어드민</h1>
    </StyledSidebar>
  );
};

export default Sidebar;
