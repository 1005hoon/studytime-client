import React from 'react';
import InputForm from '../../components/forms/input-form';
import Select from '../../components/forms/select';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface CreatePopupFormProps {}

const CreatePopupForm: React.FC<CreatePopupFormProps> = (props) => {
  const eventsList = useTypedSelector((state) => state.popups.eventList);
  const renderTargetIdOptions = () =>
    eventsList.map((event) => (
      <option value={event.id} key={event.id}>
        {event.name}
      </option>
    ));
  return (
    <InputForm>
      <InputForm.Group>
        <label htmlFor='screen'>팝업 유형</label>
        <Select name='screen'>
          <option>이벤트</option>
          <option>공지사항</option>
        </Select>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='targetId'>
          이거는 유형이 이벤트인 경우에만 보여야함 이동할 이벤트 페이지{' '}
        </label>
        <Select name='screen'>{renderTargetIdOptions()}</Select>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='url'>
          이거는 유형이 공지사항인 경우만 보여야함 CTA 링크
        </label>
        <input type='url' name='url' placeholder='CTA 링크' />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='description'>팝업 설명</label>
        <input
          type='text'
          name='description'
          placeholder='팝업에 대한 설명을 입력하세요'
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='img_url'>이미지 등록</label>
        <input
          type='file'
          name='image'
          accept='image/*'
          //   onChange={props.onChange}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label>이미지 미리보기</label>
        {/* <img src={props.imagePreview} style={{ width: '250px' }} /> */}
      </InputForm.Group>
    </InputForm>
  );
};

export default CreatePopupForm;
