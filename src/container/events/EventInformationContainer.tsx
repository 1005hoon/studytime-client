import React from 'react';
import InputForm from '../../components/forms/input-form';
import { IEvent } from '../../utils/types/event.interface';

interface EventInformationContainerProps {
  event: IEvent;
}

const EventInformationContainer: React.FC<EventInformationContainerProps> = (
  props
) => {
  return (
    <InputForm width='600px'>
      <InputForm.Group>
        <h1>{props.event.name}</h1>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor=''>생성일</label>
        <input
          readOnly
          type='text'
          value={new Date(props.event.createdAt).toLocaleDateString()}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor=''>진행여부</label>
        <input readOnly type='text' value='진행여부 필드 추가 필요합니다 ' />
      </InputForm.Group>
    </InputForm>
  );
};

export default EventInformationContainer;
