import styled from 'styled-components/macro';

export const StyledPageHeader = styled.header`
  height: 86px;
  width: 100%;
  border-bottom: 5px solid #24262b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
`;

export const StyledPageHeaderContainer = styled.div`
  max-width: 1400px;
  /* min-width: 1100px; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPageHeaderTitle = styled.h2`
  font-weight: 300;
`;
