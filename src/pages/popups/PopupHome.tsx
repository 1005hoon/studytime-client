import React, { KeyboardEventHandler, useRef, useState } from 'react';
import Loading from '../../components/loading';
import PageHeader from '../../components/page-header';
import SearchInput from '../../components/search-input';
import BasePageLayout from '../../container/layout/BasePageLayout';

interface PopupHomeProps {}

const PopupHome: React.FC<PopupHomeProps> = (props) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState('');

  const handlePopupSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
    }
  };
  return (
    <BasePageLayout>
      {/* { loading ? <Loading /> : <Loading.ReleaseBody />} */}
      <PageHeader title='팝업 관리'>
        <SearchInput
          ref={searchRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handlePopupSearch}
        />
      </PageHeader>
    </BasePageLayout>
  );
};

export default PopupHome;
