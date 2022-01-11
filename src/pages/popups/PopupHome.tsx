import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import PaginationResult from '../../components/pagination/result';
import SearchInput from '../../components/search-input';
import BasePageLayout from '../../container/layout/BasePageLayout';
import Pagination from '../../container/layout/Pagination';
import CreatePopupForm from '../../container/popups/CreatePopupForm';
import PopupsList from '../../container/popups/PopupsList';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { getPagingData } from '../../utils/get-paging-data';
import { IPopup } from '../../utils/types/popup.interface';

interface PopupHomeProps {}

const PopupHome: React.FC<PopupHomeProps> = (props) => {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const { handleFetchAllPopups } = useActions();

  const [popupData, setPopupdata] = useState<Partial<IPopup>>({
    screen: '',
    targetId: 0,
    url: '',
    description: '',
  });
  const [popupImage, setPopupImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');

  const { loading, popupList, error } = useTypedSelector(
    (state) => state.popups
  );

  const setPagingData = (count: number, currentPage: number) => {
    const pagingData = getPagingData(count, currentPage);
    setPages(() => pagingData);
  };

  const handlePopupSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
    }
  };

  const handlePopupClick = (popupId: number) => {
    navigate(`/popups/${popupId}`);
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!popupData.screen) {
      return alert('팝업 유형을 선택해주세요');
    }

    if (popupData.screen === 'event' && !popupData.screen) {
      return alert('이동할 이벤트 페이지를 선택해주세요');
    }

    if (popupData.screen === 'webView' && !popupData.url) {
      return alert('CTA 링크를 입력하세요');
    }

    const formData = new FormData();

    if (popupImage) {
      formData.append('image', popupImage);
    }

    Object.keys(popupData).forEach((key) => {
      if (key) {
        formData.append(key, popupData[key] as string);
      }
    });
  };

  const handlePopupDataChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value, files } = e.currentTarget;

    if (name === 'image') {
      const file = (files as FileList)[0];
      setPopupImage(() => file);
      setImagePreview(() => URL.createObjectURL(file));
    } else {
      setPopupdata((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    setPagingData(popupList.count, currentPage);
  }, [popupList]);

  useEffect(() => {
    handleFetchAllPopups(1);
  }, []);

  return (
    <BasePageLayout>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      <PageHeader title='팝업 관리'>
        <SearchInput
          ref={searchRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handlePopupSearch}
        />
      </PageHeader>
      <PageLayout.Content>
        <PageLayout.Row>
          <PaginationResult
            first={popupList.first}
            last={popupList.last}
            count={popupList.count}
            loading={loading}
          />
        </PageLayout.Row>
        <PageLayout.Row>
          <PageLayout.Column title='팝업 조회'>
            <PopupsList popups={popupList.data} onClick={handlePopupClick} />
            <Pagination
              route='popups'
              currentPage={currentPage}
              paginate={setCurrentPage}
              pages={pages}
            />
          </PageLayout.Column>
          <PageLayout.Column title='새로운 팝업 생성'>
            <CreatePopupForm
              popupData={popupData}
              imagePreview={imagePreview}
              onChange={handlePopupDataChange}
              onSubmit={handleFormSubmit}
            />
          </PageLayout.Column>
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default PopupHome;
