import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import RoundButton from '../../components/buttons/round-button';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import PaginationResult from '../../components/pagination/result';
import SearchInput from '../../components/search-input';
import EventsList from '../../container/events/EventsList';
import BasePageLayout from '../../container/layout/BasePageLayout';
import Pagination from '../../container/layout/Pagination';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { getPagingData } from '../../utils/get-paging-data';

interface EventsHomeProps {}

const EventsHome: React.FC<EventsHomeProps> = (props) => {
  const { onFetchAllEvents, onFetchEventDetailsByEventId } = useActions();
  const {
    data: events,
    loading,
    error,
  } = useTypedSelector((state) => state.eventList);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(0);
  const location = useLocation();

  const setPagingData = (count: number, currentPage: number) => {
    const pagingData = getPagingData(count, currentPage);
    setPages(() => pagingData);
  };

  const onUserSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      // onSearchUserWithKeyword(search);
    }
  };

  useEffect(() => {
    const pageNumber = +location.search.split('=')[1];

    if (!pageNumber) {
      // 페이지 1로 사용자 정보 조회
      onFetchAllEvents(currentPage, search);
    } else {
      onFetchAllEvents(pageNumber, search);
    }
  }, [location.search]);

  useEffect(() => {
    setPagingData(events.count, currentPage);
  }, [events]);

  useEffect(() => {
    onFetchEventDetailsByEventId(selectedEvent);
  }, [selectedEvent]);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <BasePageLayout>
      <PageHeader title='이벤트 관리'>
        <SearchInput ref={searchRef} />
      </PageHeader>
      <PageLayout.Content>
        <PageLayout.Row>
          <PaginationResult
            first={events.first}
            last={events.last}
            count={events.count}
          />
          <RoundButton primary>이벤트 생성</RoundButton>
        </PageLayout.Row>
        <PageLayout.Row>
          <PageLayout.Column>
            <EventsList
              events={events.data}
              onClick={(id: number) => setSelectedEvent(id)}
            />
            <Pagination
              route='events'
              currentPage={currentPage}
              paginate={setCurrentPage}
              pages={pages}
            />
          </PageLayout.Column>
          <PageLayout.Column
            title={
              events.data.find((event) => event.id === selectedEvent)?.name ||
              '이벤트를 선택해주세요'
            }
          ></PageLayout.Column>
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventsHome;
