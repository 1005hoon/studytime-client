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
  // const {
  //   data: eventWithDetail,
  //   loading: eventWithDetailLoading,
  //   error: eventWithDetailError,
  // } = useTypedSelector((state) => state.eventListWithDetail);
  // const {} = useActions();
  const params = useParams();
  const [detail, setDetail] = useState<Partial<IEventDetail>>({
    eventId: 0,
    type: '배너',
    url1: '',
    url2: '',
    description: '',
  });
  const [detailImage, setDetailImage] = useState<File>();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', detailImage as File);
    // formData.append('event', eventWithDetail.event.name);

    Object.keys(detail).forEach((key) => {
      if (key !== '') {
        formData.append(key, detail[key] as string);
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
    } else {
      setDetail((detail) => ({ ...detail, [name]: value }));
    }
  };

  useEffect(() => {
    const id = params.id as string;
    setDetail((detail) => ({ ...detail, eventId: +id }));
    // onFetchEventDetailsByEventId(+id);
  }, [params]);

  return (
    <BasePageLayout>
      <PageHeader title='이벤트 관리' />
      <PageLayout.Content>
        <PageLayout.Row>
          <PageLayout.Column title='이벤트 상세정보 관리'>
            {/* <EventDetailsList
              details={eventWithDetail.details}
              selectedEvent={eventWithDetail.event.name}
              onClick={console.log}
            /> */}
          </PageLayout.Column>
          <PageLayout.Column
          // title={`${eventWithDetail.event.name} 상세정보 생성`}
          >
            <CreateEventDetailForm
              eventDetail={detail}
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
