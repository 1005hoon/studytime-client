import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import CreateEventDetailForm from '../../container/events/CreateEventDetailForm';
import EventDetailsList from '../../container/events/EventDetailsList';
import BasePageLayout from '../../container/layout/BasePageLayout';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface EventDetailPageProps {}

const EventDetailPage: React.FC<EventDetailPageProps> = (props) => {
  const {
    data: eventWithDetail,
    loading: eventWithDetailLoading,
    error: eventWithDetailError,
  } = useTypedSelector((state) => state.eventListWithDetail);
  const { onFetchEventDetailsByEventId } = useActions();
  const params = useParams();
  const [eventId, setEventId] = useState(0);

  useEffect(() => {
    const id = params.id as string;
    onFetchEventDetailsByEventId(+id);
  }, [params]);

  return (
    <BasePageLayout>
      <PageHeader title='이벤트 관리' />
      <PageLayout.Content>
        <PageLayout.Row>
          <PageLayout.Column title='이벤트 상세정보 관리'>
            <EventDetailsList
              details={eventWithDetail.details}
              selectedEvent={eventWithDetail.event.name}
              onClick={console.log}
            />
          </PageLayout.Column>
          <PageLayout.Column
            title={`${eventWithDetail.event.name} 상세정보 생성`}
          >
            <CreateEventDetailForm />
          </PageLayout.Column>
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventDetailPage;
