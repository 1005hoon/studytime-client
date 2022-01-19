import React, { useState } from 'react';
import InputForm from '../../components/forms/input-form';
import { IEventDetail } from '../../utils/types/event-detail.interface';
import { IEvent } from '../../utils/types/event.interface';

interface EventInformationContainerProps {
  event: IEvent;
  details: IEventDetail[];
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
        <input
          readOnly
          type='text'
          value={props.event.inProgress ? '진행중' : '종료'}
        />
      </InputForm.Group>
    </InputForm>
  );
};

export default EventInformationContainer;
