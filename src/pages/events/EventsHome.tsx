import React from 'react';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import SearchInput from '../../components/search-input';
import EventsList from '../../container/events/EventsList';
import BasePageLayout from '../../container/layout/BasePageLayout';

interface EventsHomeProps {}

const EventsHome: React.FC<EventsHomeProps> = (props) => {
  return (
    <BasePageLayout>
      <PageHeader title='이벤트 관리'>
        <SearchInput />
      </PageHeader>
      <PageLayout.Content>
        <EventsList />
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventsHome;
