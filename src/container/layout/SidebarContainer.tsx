import React from 'react';
import Sidebar from '../../components/sidebar';

interface SidebarContainerProps {}

const SidebarContainer: React.FC<SidebarContainerProps> = (props) => {
  const routes = [];
  return (
    <Sidebar>
      <Sidebar.Header />
      <Sidebar.Body>
        <Sidebar.Link to='/'>대시보드 홈</Sidebar.Link>
        <Sidebar.Link to='/users'>사용자 정보 관리</Sidebar.Link>
      </Sidebar.Body>
      <Sidebar.Footer />
    </Sidebar>
  );
};

export default SidebarContainer;
