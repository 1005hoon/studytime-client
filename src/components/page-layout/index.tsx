import React from 'react';
import {
  StyledContentContainer,
  StyledLayoutColumn,
  StyledLayoutColumnTitle,
  StyledLayoutRow,
  StyledPage,
  StyledPageContent,
} from './styles';

interface PageLayoutProps {}
interface PageLayoutComposition {
  Content: React.FC;
  Row: React.FC;
  Column: React.FC<PageLayoutColumnProps>;
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

interface PageLayoutColumnProps {
  title?: string;
}
PageLayout.Column = function PageLayoutColumn(props) {
  return (
    <StyledLayoutColumn>
      {props.title && (
        <StyledLayoutColumnTitle>{props.title}</StyledLayoutColumnTitle>
      )}
      {props.children}
    </StyledLayoutColumn>
  );
};

export default PageLayout;
