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
import UpdateEventDetailForm from '../../container/events/UpdateEventDetailForm';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface EventDetailByIdPageProps {}

const EventDetailByIdPage: React.FC<EventDetailByIdPageProps> = (props) => {
  const param = useParams();
  const { handleUpdateEventDetail, handleFetchEventDetailByDetailId } =
    useActions();
  const { loading, error, eventDetail } = useTypedSelector(
    (state) => state.events
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailImage, setDetailImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [detailData, setDetailData] = useState<Partial<IEventDetail>>({
    ...eventDetail,
  });

  const onHandleUpdate = () => {
    if (!detailData.type) {
      return alert('이벤트 상세정보 유형을 선택하세요');
    }

    if (!detailData.description) {
      return alert('간략한 설명을 작성해주세요');
    }

    if (detailData.type === '배너' && !imagePreview) {
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

    if (!window.confirm('상세정보를 수정할까요??')) {
      return;
    }

    handleUpdateEventDetail(eventDetail.id, formData);
  };

  const onHandleDelete = () => {};

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

  useEffect(() => {
    if (!loading && eventDetail.description) {
      setDetailData((prev) => ({ ...prev, ...eventDetail }));
      setImagePreview(() => eventDetail.imgUrl);
    }
  }, [eventDetail]);

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
          <UpdateEventDetailForm
            eventDetail={detailData}
            imagePreview={imagePreview}
            onChange={onChangeDetailData}
            onUpdate={onHandleUpdate}
          />
        </Modal>
        <PageLayout.Row>
          <EventDetailContainer detail={eventDetail} />
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventDetailByIdPage;
