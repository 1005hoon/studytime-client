import React from 'react';
import Sidebar from '../../components/sidebar';
import { ROUTES } from '../../utils/constants';

interface SidebarContainerProps {}

const SidebarContainer: React.FC<SidebarContainerProps> = (props) => {
  return (
    <Sidebar>
      <Sidebar.Header />
      <Sidebar.Body>
        <Sidebar.Link to={ROUTES.HOME}>대시보드 홈</Sidebar.Link>
        <Sidebar.Link to={ROUTES.USERS}>사용자 관리</Sidebar.Link>
        <Sidebar.Link to={ROUTES.EVENTS}>이벤트 관리</Sidebar.Link>
      </Sidebar.Body>
      <Sidebar.Footer />
    </Sidebar>
  );
};

export default SidebarContainer;
