import React, {
  ChangeEventHandler,
  forwardRef,
  KeyboardEventHandler,
  RefObject,
} from 'react';
import SearchIcon from '../../assets/images/btn_search.svg';
import {
  StyledSearchIcon,
  StyledSearchInput,
  StyledSearchInputContainer,
} from './styles';

interface SearchInputProps {
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  required?: boolean;
  id?: string;
  ref?: RefObject<HTMLInputElement>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  width?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    return (
      <StyledSearchInputContainer>
        <StyledSearchInput
          placeholder='찾고싶은 키워드를 검색하세요'
          onKeyPress={props.onKeyPress}
          required={props.required || false}
          type='text'
          id={props.id}
          ref={ref}
          value={props.value || ''}
          onChange={props.onChange || console.log}
          width={props.width}
          disabled={props.disabled}
          name={props.name}
        />
        <StyledSearchIcon src={SearchIcon} />
      </StyledSearchInputContainer>
    );
  }
);

export default SearchInput;
