import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import CreateEventDetailForm from '../../container/events/CreateEventDetailForm';
import EventDetailsList from '../../container/events/EventDetailsList';
import BasePageLayout from '../../container/layout/BasePageLayout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface EventDetailPageProps {}

const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
  const params = useParams();
  const { loading, error, event, detailList } = useTypedSelector(
    (state) => state.events
  );
  const { handleFetchEventDetailsByEventId } = useActions();
  const [detailData, setDetailData] = useState<Partial<IEventDetail>>({
    eventId: 0,
    type: '',
    url1: '',
    url2: '',
    description: '',
  });
  const [detailImage, setDetailImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (detailData) {
      formData.append('image', detailImage as File);
    }

    Object.keys(detailData).forEach((key) => {
      if (key) {
        formData.append(key, detailData[key] as string);
      }
    });

    // onCreateEventDetail(detail.eventId as number, formData);
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

  useEffect(() => {
    const id = params.id as string;

    handleFetchEventDetailsByEventId(+id);
  }, []);

  return (
    <BasePageLayout>
      <PageHeader title='이벤트 관리' />
      <PageLayout.Content>
        <PageLayout.Row>
          <PageLayout.Column title={`${event.name} 상세정보 관리`}>
            <EventDetailsList
              details={detailList}
              selectedEvent={event.name}
              onClick={console.log}
            />
          </PageLayout.Column>
          <PageLayout.Column title={`${event.name} 상세정보 생성`}>
            <CreateEventDetailForm
              imagePreview={imagePreview}
              eventDetail={detailData}
              onChange={onChangeDetailData}
              onSubmit={onSubmit}
            />
          </PageLayout.Column>
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventDetailPage;
