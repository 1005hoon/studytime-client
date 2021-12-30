import styled from 'styled-components/macro';

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
  border: 1px solid white;
`;

export const StyledContentContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
