import styled from 'styled-components/macro';

export const StyledSearchInputContainer = styled.div`
  width: 310px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSearchInput = styled.input`
  background-color: #24262b;
  width: 268px;
  padding: 18px 24px;
  border-radius: 10px;
  color: #fff;

  &::placeholder {
    color: #525b69;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledSearchIcon = styled.img`
  display: inline-block;
`;
