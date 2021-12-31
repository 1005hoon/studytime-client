import styled from 'styled-components/macro';

export const StyledInputFormContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledInputFormBody = styled.form`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #31363e;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const StyledInputFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;

  label {
    display: block;
    padding-bottom: 10px;
    color: #657177;
    font-size: 14px;
  }

  input {
    padding: 1.5rem;
    background-color: #f3f6f7;
    border-radius: 8px;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
