import React from 'react';
import {
  StyledContentContainer,
  StyledLayoutColumn,
  StyledLayoutRow,
  StyledPage,
  StyledPageContent,
} from './styles';

interface PageLayoutProps {}
interface PageLayoutComposition {
  Content: React.FC;
  Row: React.FC;
  Column: React.FC;
}
const PageLayout: React.FC<PageLayoutProps> & PageLayoutComposition = (
  props
) => {
  return <StyledPage>{props.children}</StyledPage>;
};

PageLayout.Content = function PageLayoutContent({ children }) {
  return (
    <StyledPageContent>
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledPageContent>
  );
};

PageLayout.Row = function PageLayoutRow(props) {
  return <StyledLayoutRow>{props.children}</StyledLayoutRow>;
};

PageLayout.Column = function PageLayoutColumn(props) {
  return <StyledLayoutColumn>{props.children}</StyledLayoutColumn>;
};

export default PageLayout;
