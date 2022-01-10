import React from 'react';
import ListTable from '../../components/list-table';
import { IPopup } from '../../utils/types/popup.interface';

interface PopupsListProps {
  popups: IPopup[];
  onClick: (popupId: number) => void;
}

const PopupsList: React.FC<PopupsListProps> = (props) => {
  const renderPopupLists = () =>
    props.popups.map((popup) => (
      <ListTable.Row key={popup.id} onClick={() => props.onClick(popup.id)}>
        <ListTable.Data>{popup.targetId}</ListTable.Data>
        <ListTable.Data>
          {popup.screen === 'event' ? '이벤트' : '공지'}
        </ListTable.Data>
        <ListTable.Data>{popup.useYn ? '게시중' : '게시 중지'}</ListTable.Data>
        <ListTable.Data>{popup.description}</ListTable.Data>
      </ListTable.Row>
    ));

  return (
    <ListTable>
      <ListTable.Header>
        <ListTable.Row>
          <ListTable.Category>팝업 이름</ListTable.Category>
          <ListTable.Category>팝업 유형</ListTable.Category>
          <ListTable.Category>게시 여부</ListTable.Category>
          <ListTable.Category>팝업 설명</ListTable.Category>
        </ListTable.Row>
      </ListTable.Header>
      <ListTable.Body>{renderPopupLists()}</ListTable.Body>
    </ListTable>
  );
};

export default PopupsList;
