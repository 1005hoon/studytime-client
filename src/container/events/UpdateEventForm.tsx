import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import Loading from '../../components/loading';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { IEvent } from '../../utils/types/event.interface';

interface UpdateEventFormProps {
  event: IEvent;
}

const UpdateEventForm: React.FC<UpdateEventFormProps> = (props) => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({ ...props.event });
  const { handleUpdateEvent, handleDeleteEvent } = useActions();
  const { loading, error, event } = useTypedSelector((state) => state.events);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const onDelete = () => {
    if (window.confirm('정말로 삭제할까요?')) {
      handleDeleteEvent(eventData.id);
    }
  };

  const onUpdate = () => {
    if (eventData.name === '') {
      return alert('이벤트 이름을 입력하세요');
    }

    if (window.confirm('이벤트 정보를 수정할까요?')) {
      handleUpdateEvent({ ...eventData });
    }
  };

  useEffect(() => {
    if (!loading && event.isDeleted === 1) {
      navigate('/events');
    }

    if (!loading && error) {
      alert(error);
    }
  }, [event]);

  return (
    <InputForm onSubmit={(e) => e.preventDefault()}>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
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
