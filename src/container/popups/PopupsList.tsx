import React from 'react';
import ListTable from '../../components/list-table';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { IPopup } from '../../utils/types/popup.interface';

interface PopupsListProps {
  popups: IPopup[];
  onClick: (popupId: number) => void;
}

const PopupsList: React.FC<PopupsListProps> = (props) => {
  const eventsList = useTypedSelector((state) => state.popups.eventList);

  const renderPopupLists = () =>
    props.popups.map((popup) => (
      <ListTable.Row key={popup.id} onClick={() => props.onClick(popup.id)}>
        <ListTable.Data>{popup.title.slice(0, 15)}</ListTable.Data>
        <ListTable.Data>
          {eventsList.find((event) => event.id === popup.targetId)?.name}
        </ListTable.Data>
        <ListTable.Data>
          {popup.screen === 'event' ? '이벤트' : '공지'}
        </ListTable.Data>
        <ListTable.Data>
          {new Date(popup.createdAt).toLocaleDateString()}
        </ListTable.Data>
        <ListTable.Data>{popup.useYn ? '게시중' : '게시 중지'}</ListTable.Data>
      </ListTable.Row>
    ));

  return (
    <ListTable>
      <ListTable.Header>
        <ListTable.Row>
          <ListTable.Category width='30%'>팝업 제목</ListTable.Category>
          <ListTable.Category width='20%'>연결된 이벤트</ListTable.Category>
          <ListTable.Category width='10%'>유형</ListTable.Category>
          <ListTable.Category width='10%'>생성일</ListTable.Category>
          <ListTable.Category width='10%'>게시</ListTable.Category>
        </ListTable.Row>
      </ListTable.Header>
      <ListTable.Body>{renderPopupLists()}</ListTable.Body>
    </ListTable>
  );
};

export default PopupsList;
