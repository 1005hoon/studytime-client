import React from 'react';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import { IEvent } from '../../utils/types/event.interface';

interface CreateEventFormProps {
  event: Partial<IEvent>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const CreateEventForm: React.FC<CreateEventFormProps> = (props) => {
  return (
    <InputForm onSubmit={props.onSubmit}>
      <InputForm.Group>
        <label htmlFor='name'>내용</label>
        <input
          type='text'
          name='name'
          value={props.event.name}
          onChange={props.onChange}
        />
      </InputForm.Group>
      <InputForm.Group>
        <RoundButton primary>생성하기</RoundButton>
      </InputForm.Group>
    </InputForm>
  );
};

export default CreateEventForm;
