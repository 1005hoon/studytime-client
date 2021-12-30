import React from 'react';
import {
  StyledPageHeader,
  StyledPageHeaderContainer,
  StyledPageHeaderTitle,
} from './styles';

interface PageHeaderProps {
  title: string;
}
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <StyledPageHeader>
      <StyledPageHeaderContainer>
        <StyledPageHeaderTitle>{props.title}</StyledPageHeaderTitle>
        {props.children}
      </StyledPageHeaderContainer>
    </StyledPageHeader>
  );
};

export default PageHeader;
