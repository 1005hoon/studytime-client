import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import RoundButton from '../../components/buttons/round-button';
import Loading from '../../components/loading';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import BasePageLayout from '../../container/layout/BasePageLayout';
import PopupDetailContainer from '../../container/popups/PopupdetailContainer';
import UpdatePopupForm from '../../container/popups/UpdatePopupForm';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface PopupDetailPageProps {}

const PopupDetailPage: React.FC<PopupDetailPageProps> = (props) => {
  const params = useParams();
  const { handleFetchPopupById, handleFetchAllPopups } = useActions();
  const { loading, popup, eventList, error } = useTypedSelector(
    (state) => state.popups
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const id = params.id as string;
    handleFetchAllPopups(1);
    handleFetchPopupById(+id);
  }, []);

  useEffect(() => {
    if (!loading && !error && popup.title) {
      setIsModalOpen(() => false);
    }
  }, [popup]);

  return (
    <BasePageLayout>
      <PageHeader title={`${popup.description || '팝업 상세정보'} 관리`}>
        <RoundButton onClick={() => setIsModalOpen(true)} primary>
          정보 수정하기
        </RoundButton>
      </PageHeader>
      <PageLayout.Content>
        {loading ? <Loading /> : <Loading.ReleaseBody />}
        {error ?? <p>{error}</p>}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onAfterOpen={() => (document.body.style.overflow = 'hidden')}
          onAfterClose={() => (document.body.style.overflow = 'unset')}
          className='Modal'
          overlayClassName='Overlay'
        >
          <h2>팝업 수정하기</h2>
          <UpdatePopupForm popup={popup} eventList={eventList} />
        </Modal>
        <PageLayout.Row>
          <PopupDetailContainer popup={popup} eventList={eventList} />
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default PopupDetailPage;
