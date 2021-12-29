import React from 'react';
import { StyledPage, StyledPageContent } from './styles';

interface PageLayoutProps {}
interface PageLayoutComposition {
  Content: React.FC;
}
const PageLayout: React.FC<PageLayoutProps> & PageLayoutComposition = (
  props
) => {
  return <StyledPage>{props.children}</StyledPage>;
};

PageLayout.Content = function PageLayoutContent({ children }) {
  return <StyledPageContent>{children}</StyledPageContent>;
};

export default PageLayout;
