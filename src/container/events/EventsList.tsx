import React from 'react';
import ListTable from '../../components/list-table';
import { IEvents } from '../../utils/types/events.interface';

interface EventsListProps {
  events: IEvents[];
  onClick: (id: number) => void;
}

const EventsList: React.FC<EventsListProps> = ({ events, onClick }) => {
  const renderUserLists = () =>
    events.map((event) => (
      <ListTable.Row key={event.id} onClick={() => onClick(event.id)}>
        <ListTable.Data>{event.name}</ListTable.Data>
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
            <ListTable.Category width='25%'>생성 날짜</ListTable.Category>
          </ListTable.Row>
        </ListTable.Header>
        <ListTable.Body>{renderUserLists()}</ListTable.Body>
      </ListTable>
    </>
  );
};

export default EventsList;
