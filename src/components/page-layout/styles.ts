import styled from 'styled-components/macro';
import { PageLayoutColumnRowProps } from '.';

export const StyledPage = styled.div`
  margin-left: 250px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledPageContent = styled.main`
  width: 100%;
  min-height: calc(100vh - 55px);
  padding: 20px 50px;
`;

export const StyledContentContainer = styled.div`
  max-width: 1400px;
  min-width: 760;
  width: 100%;
  margin: 0 auto;
`;

export const StyledLayoutRow = styled.div<PageLayoutColumnRowProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  gap: 15px;
  flex-wrap: wrap;
`;

export const StyledLayoutColumn = styled.div`
  flex: 1 1 400px;
  flex-wrap: wrap;
`;

export const StyledLayoutColumnTitle = styled.h2`
  color: #657177;
  font-size: 18px;
  font-weight: 500;
`;
