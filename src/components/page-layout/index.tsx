import React from 'react';
import { StyledPage } from './styles';

interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  return <StyledPage>{props.children}</StyledPage>;
};

export default PageLayout;
