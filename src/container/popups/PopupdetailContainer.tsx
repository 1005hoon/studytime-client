import React from 'react';
import InputForm from '../../components/forms/input-form';
import { IEvent } from '../../utils/types/event.interface';

import { IPopup } from '../../utils/types/popup.interface';

interface PopupDetailContainerProps {
  popup: IPopup;
  eventList: IEvent[];
}

const PopupDetailContainer: React.FC<PopupDetailContainerProps> = (props) => {
  return (
    <InputForm width='600px'>
      <InputForm.Group>
        <h2>{props.popup.description} 정보</h2>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor=''>생성일</label>
        <input
          readOnly
          type='text'
          value={new Date(props.popup.createdAt).toLocaleDateString()}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor=''>유형</label>
        <input
          readOnly
          type='text'
          value={(props.popup.screen as string) === 'event' ? '이벤트' : '공지'}
        />
      </InputForm.Group>
      {props.popup.targetId && (
        <InputForm.Group>
          <label htmlFor=''>연결된 이벤트</label>
          <input
            readOnly
            type='text'
            value={
              props.eventList.find((event) => event.id === props.popup.targetId)
                ?.name
            }
          />
        </InputForm.Group>
      )}
      {props.popup.url && (
        <InputForm.Group>
          <label htmlFor=''>웹뷰 링크</label>
          <input readOnly type='text' value={props.popup.url as string} />
        </InputForm.Group>
      )}
      {(props.popup.imgUrl as string) && (
        <InputForm.Group>
          <label>등록된 이미지 미리보기</label>
          <img
            src={props.popup.imgUrl as string}
            style={{ width: '250px', maxHeight: '250px', objectFit: 'cover' }}
          />
        </InputForm.Group>
      )}
    </InputForm>
  );
};

export default PopupDetailContainer;
