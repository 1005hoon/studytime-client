import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import RoundButton from '../../components/buttons/round-button';
import Loading from '../../components/loading';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import CreateEventDetailForm from '../../container/events/CreateEventDetailForm';
import EventDetailsList from '../../container/events/EventDetailsList';
import BasePageLayout from '../../container/layout/BasePageLayout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { IEventDetail } from '../../utils/types/event-detail.interface';
import UpdateEventForm from '../../container/events/UpdateEventForm';
import EventInformationContainer from '../../container/events/EventInformationContainer';

interface EventDetailPageProps {}

const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, error, event, detailList } = useTypedSelector(
    (state) => state.events
  );
  const { handleFetchEventDetailsByEventId, handleCreateEventDetail } =
    useActions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailImage, setDetailImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [detailData, setDetailData] = useState<Partial<IEventDetail>>({
    type: '',
    eventId: 0,
    url1: '',
    urlButtonName1: '',
    url2: '',
    urlButtonName2: '',
    description: '',
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!detailData.type) {
      return alert('이벤트 상세정보 유형을 선택하세요');
    }

    if (!detailData.description) {
      return alert('간략한 설명을 작성해주세요');
    }

    if (detailData.type === '배너' && !detailImage) {
      return alert('배너용 이미지를 업로드해주세요');
    }

    const formData = new FormData();

    if (detailImage) {
      formData.append('image', detailImage as File);
    }

    Object.keys(detailData).forEach((key) => {
      if (key) {
        formData.append(key, detailData[key] as string);
      }
    });

    if (!window.confirm('상세정보를 생성할까요?')) {
      return;
    }

    handleCreateEventDetail(event.id, formData);
    setDetailData(() => ({
      type: '',
      eventId: 0,
      url1: '',
      urlButtonName1: '',
      url2: '',
      urlButtonName2: '',
      description: '',
    }));
    setImagePreview(() => '');
    setDetailImage(() => undefined);
  };

  const onChangeDetailData: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value, files } = e.currentTarget;

    if (name === 'image') {
      const file = (files as FileList)[0];
      setDetailImage(() => file);
      setImagePreview(() => URL.createObjectURL(file));
    } else {
      setDetailData((detail) => ({ ...detail, [name]: value }));
    }
  };

  const handleNavigateDetail = (detailId: number) => {
    navigate(`/events/${event.id}/details/${detailId}`);
  };

  useEffect(() => {
    const id = params.id as string;
    setDetailData((prev) => ({ ...prev, eventId: +id }));
    handleFetchEventDetailsByEventId(+id);
  }, []);

  useEffect(() => {
    if (!loading && event.isDeleted === 1) {
      navigate('/events');
      setIsModalOpen(() => false);
    }
  }, [event]);

  return (
    <BasePageLayout>
      <PageHeader title={`${event.name} 관리`}>
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
          <h2>이벤트 수정하기</h2>
          <UpdateEventForm event={event} />
        </Modal>

        {event.id !== 0 && event.isDeleted === 0 && (
          <>
            <PageLayout.Row>
              <EventInformationContainer event={event} />
            </PageLayout.Row>
            <PageLayout.Row>
              <PageLayout.Column title='등록된 이벤트 상세정보 관리'>
                <EventDetailsList
                  details={detailList}
                  selectedEvent={event.name}
                  onClick={handleNavigateDetail}
                />
              </PageLayout.Column>
              <PageLayout.Column title='새로운 이벤트 상세정보 생성'>
                <CreateEventDetailForm
                  imagePreview={imagePreview}
                  eventDetail={detailData}
                  onChange={onChangeDetailData}
                  onSubmit={onSubmit}
                />
              </PageLayout.Column>
            </PageLayout.Row>
          </>
        )}
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventDetailPage;
