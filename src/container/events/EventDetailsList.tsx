import React from 'react';
import ListTable from '../../components/list-table';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface EventDetailsListProps {
  details?: IEventDetail[];
  selectedEvent?: string;
  onClick: (id: number) => void;
}

const EventDetailsList: React.FC<EventDetailsListProps> = ({
  details,
  selectedEvent,
  onClick,
}) => {
  const renderEventDetailLists = () =>
    details?.map((event) => (
      <ListTable.Row key={event.id} onClick={(e) => onClick(event.id)}>
        <ListTable.Data>
          {event.description.length < 20
            ? event.description
            : `${event.description.slice(0, 20)}...`}
        </ListTable.Data>
        <ListTable.Data>{event.type}</ListTable.Data>
        <ListTable.Data>
          {new Date(event.createdAt).toLocaleDateString()}
        </ListTable.Data>
        <ListTable.Data>
          {event.isDeleted === 0 ? '진행중' : '종료'}
        </ListTable.Data>
      </ListTable.Row>
    ));

  return (
    <>
      <ListTable>
        <ListTable.Header>
          <ListTable.Row>
            <ListTable.Category width='30%'>설명</ListTable.Category>
            <ListTable.Category width='15%'>유형</ListTable.Category>
            <ListTable.Category width='20%'>생성일</ListTable.Category>
            <ListTable.Category width='20%'>삭제여부</ListTable.Category>
          </ListTable.Row>
        </ListTable.Header>
        <ListTable.Body>{renderEventDetailLists()}</ListTable.Body>
      </ListTable>
    </>
  );
};

export default EventDetailsList;
