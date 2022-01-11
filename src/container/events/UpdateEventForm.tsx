import React, { useState } from 'react';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import { IEvent } from '../../utils/types/event.interface';

interface UpdateEventFormProps {
  event: IEvent;
}

const UpdateEventForm: React.FC<UpdateEventFormProps> = (props) => {
  const [eventData, setEventData] = useState({ ...props.event });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const onDelete = () => {
    if (window.confirm('정말로 삭제할까요?')) {
    }
  };

  const onUpdate = () => {
    if (window.confirm('이벤트 정보를 수정할까요?')) {
    }
  };

  return (
    <InputForm onSubmit={(e) => e.preventDefault()}>
      <InputForm.Group>
        <label htmlFor='name'>이름</label>
        <input
          type='text'
          name='name'
          value={eventData.name}
          onChange={onChange}
        />
      </InputForm.Group>
      <InputForm.Group justify>
        <RoundButton width='100%' primary onClick={onDelete}>
          삭제하기
        </RoundButton>
        <RoundButton width='100%' onClick={onUpdate}>
          수정하기
        </RoundButton>
      </InputForm.Group>
    </InputForm>
  );
};

export default UpdateEventForm;
