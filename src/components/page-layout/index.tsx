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
  Row: React.FC<PageLayoutColumnRowProps>;
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

export interface PageLayoutColumnRowProps {
  justify?: 'flex-start' | 'flex-end' | 'space-between';
}
PageLayout.Row = function PageLayoutRow(props) {
  return (
    <StyledLayoutRow justify={props.justify}>{props.children}</StyledLayoutRow>
  );
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
