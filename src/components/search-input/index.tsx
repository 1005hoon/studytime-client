import React from 'react';
import SearchIcon from '../../assets/images/btn_search.svg';
import {
  StyledSearchIcon,
  StyledSearchInput,
  StyledSearchInputContainer,
} from './styles';

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <StyledSearchInputContainer>
      <StyledSearchInput placeholder='찾고싶은 키워드를 검색하세요' />
      <StyledSearchIcon src={SearchIcon} />
    </StyledSearchInputContainer>
  );
};

export default SearchInput;
