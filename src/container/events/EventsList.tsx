import React from 'react';
import ListTable from '../../components/list-table';
import { IEvent } from '../../utils/types/event.interface';

interface EventsListProps {
  events: IEvent[];
  onClick: (id: number) => void;
}

const EventsList: React.FC<EventsListProps> = ({ events, onClick }) => {
  const renderUserLists = () =>
    events.map((event) => (
      <ListTable.Row key={event.id} onClick={() => onClick(event.id)}>
        <ListTable.Data>{event.name}</ListTable.Data>
        <ListTable.Data>
          {event.inProgress ? '진행중' : '진행 종료'}
        </ListTable.Data>
        <ListTable.Data>
          {new Date(event.createdAt).toLocaleDateString()}
        </ListTable.Data>
      </ListTable.Row>
    ));
  return (
    <>
      <ListTable>
        <ListTable.Header>
          <ListTable.Row>
            <ListTable.Category width='50%'>이벤트 이름</ListTable.Category>
            <ListTable.Category width='25%'>진행여부</ListTable.Category>
            <ListTable.Category width='25%'>생성 날짜</ListTable.Category>
          </ListTable.Row>
        </ListTable.Header>
        <ListTable.Body>{renderUserLists()}</ListTable.Body>
      </ListTable>
    </>
  );
};

export default EventsList;
