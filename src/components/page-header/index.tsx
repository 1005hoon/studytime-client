import React from 'react';
import { StyledPageHeader, StyledPageHeaderTitle } from './styles';

interface PageHeaderProps {
  title: string;
}
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <StyledPageHeader>
      <StyledPageHeaderTitle>{props.title}</StyledPageHeaderTitle>
      {props.children}
    </StyledPageHeader>
  );
};

export default PageHeader;
