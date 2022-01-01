import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/page-header';
import PageLayout from '../../components/page-layout';
import PaginationResult from '../../components/pagination/result';
import SearchInput from '../../components/search-input';
import CreateEventForm from '../../container/events/CreateEventForm';
import EventsList from '../../container/events/EventsList';
import BasePageLayout from '../../container/layout/BasePageLayout';
import Pagination from '../../container/layout/Pagination';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { getPagingData } from '../../utils/get-paging-data';
import { IEvents } from '../../utils/types/events.interface';

interface EventsHomeProps {}

const EventsHome: React.FC<EventsHomeProps> = (props) => {
  const { onFetchAllEvents, onCreateEvent } = useActions();
  const {
    data: events,
    loading: eventLoading,
    error: eventError,
  } = useTypedSelector((state) => state.eventList);
  const { loading: createEventLoading, error: createEventError } =
    useTypedSelector((state) => state.eventListWithDetail);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const [event, setEvent] = useState<Partial<IEvents>>({ name: '' });
  const location = useLocation();

  const setPagingData = (count: number, currentPage: number) => {
    const pagingData = getPagingData(count, currentPage);
    setPages(() => pagingData);
  };

  const onEventSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onFetchAllEvents(currentPage, search);
    }
  };

  const onChangeEventFormInput: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value } = e.target;
    setEvent((e) => ({ ...e, [name]: value }));
  };

  const onCreateFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!event.name?.length) {
      alert('이벤트 이름을 입력해주세요');
      return;
    }

    if (window.confirm(`${event.name}을 생성할까요?`)) {
      onCreateEvent(event);
    }
  };

  const onSelectEvent = (eventId: number) => {
    navigate(`/events/${eventId}`);
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
    searchRef.current?.focus();
  }, []);

  return (
    <BasePageLayout>
      <PageHeader title='이벤트 관리'>
        <SearchInput
          ref={searchRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={onEventSearch}
        />
      </PageHeader>
      <PageLayout.Content>
        <PageLayout.Row>
          <PaginationResult
            first={events.first}
            last={events.last}
            count={events.count}
          />
        </PageLayout.Row>
        <PageLayout.Row>
          <PageLayout.Column title='이벤트 조회'>
            <EventsList events={events.data} onClick={onSelectEvent} />
            <Pagination
              route='events'
              currentPage={currentPage}
              paginate={setCurrentPage}
              pages={pages}
            />
          </PageLayout.Column>
          <PageLayout.Column title='새로운 이벤트 생성'>
            <CreateEventForm
              event={event}
              onChange={onChangeEventFormInput}
              onSubmit={onCreateFormSubmit}
            />
          </PageLayout.Column>
        </PageLayout.Row>
      </PageLayout.Content>
    </BasePageLayout>
  );
};

export default EventsHome;
