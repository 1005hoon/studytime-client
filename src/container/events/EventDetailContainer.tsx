import React from 'react';
import InputForm from '../../components/forms/input-form';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface EventDetailContainerProps {
  detail: IEventDetail;
}

const EventDetailContainer: React.FC<EventDetailContainerProps> = (props) => {
  return (
    <InputForm width='600px'>
      <InputForm.Group>
        <h2>{props.detail.description} 정보</h2>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor=''>생성일</label>
        <input
          readOnly
          type='text'
          value={new Date(props.detail.createdAt).toLocaleDateString()}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor=''>유형</label>
        <input readOnly type='text' value={props.detail.type as string} />
      </InputForm.Group>
      {props.detail.urlButtonName1 && (
        <InputForm.Group>
          <label htmlFor=''>첫번째 CTA 버튼</label>
          <input
            readOnly
            type='text'
            value={props.detail.urlButtonName1 as string}
          />
          <label htmlFor=''>버튼링크</label>
          <input readOnly type='text' value={props.detail.url1 as string} />
        </InputForm.Group>
      )}
      {props.detail.urlButtonName2 && (
        <InputForm.Group>
          <label htmlFor=''>두번째 CTA 버튼</label>
          <input
            readOnly
            type='text'
            value={props.detail.urlButtonName2 as string}
          />
          <label htmlFor=''>버튼링크</label>
          <input readOnly type='text' value={props.detail.url2 as string} />
        </InputForm.Group>
      )}
      {(props.detail.imgUrl as string) && (
        <InputForm.Group>
          <label>등록된 이미지 미리보기</label>
          <img
            src={props.detail.imgUrl as string}
            style={{ width: '250px', maxHeight: '250px', objectFit: 'cover' }}
          />
        </InputForm.Group>
      )}
    </InputForm>
  );
};

export default EventDetailContainer;
