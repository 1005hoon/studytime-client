import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import RoundButton from '../../components/buttons/round-button';
import Loading from '../../components/loading';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import BasePageLayout from '../../container/layout/BasePageLayout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import EventDetailContainer from '../../container/events/EventDetailContainer';

interface EventDetailByIdPageProps {}

const EventDetailByIdPage: React.FC<EventDetailByIdPageProps> = (props) => {
  const param = useParams();
  const { handleFetchEventDetailByDetailId } = useActions();
  const { loading, error, eventDetail } = useTypedSelector(
    (state) => state.events
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const detailId = +(param.detailId as string);
    handleFetchEventDetailByDetailId(detailId);
  }, []);
  return (
    <BasePageLayout>
      <PageHeader title={`${eventDetail.description ?? '이벤트 디테일'} 관리`}>
        <RoundButton onClick={() => setIsModalOpen(true)} primary>
          정보 수정하기
        </RoundButton>
      </PageHeader>
      <PageLayout.Content>
        {loading ? <Loading /> : <Loading.ReleaseBody />}
        {error && <p>{error}</p>}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onAfterOpen={() => (document.body.style.overflow = 'hidden')}
          onAfterClose={() => (document.body.style.overflow = 'unset')}
          className='Modal'
          overlayClassName='Overlay'
        >
          <h2>{eventDetail.description} 수정하기</h2>
        </Modal>
        <PageLayout.Row>
          <EventDetailContainer detail={eventDetail} />
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventDetailByIdPage;
