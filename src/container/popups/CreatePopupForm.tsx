import React from 'react';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import Select from '../../components/forms/select';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { IPopup } from '../../utils/types/popup.interface';

interface CreatePopupFormProps {
  popupData: Partial<IPopup>;
  imagePreview: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const CreatePopupForm: React.FC<CreatePopupFormProps> = (props) => {
  const eventsList = useTypedSelector((state) => state.popups.eventList);

  const renderTargetIdOptions = () =>
    eventsList.map((event) => (
      <option value={event.id} key={event.id}>
        {event.name}
      </option>
    ));

  return (
    <InputForm onSubmit={props.onSubmit}>
      <InputForm.Group>
        <label htmlFor='screen'>팝업 유형</label>
        <Select
          name='screen'
          onChange={props.onChange}
          value={props.popupData.screen as string}
        >
          <option value='event'>이벤트</option>
          <option value='notice'>공지사항</option>
          <option value='webView'>웹뷰</option>
        </Select>
      </InputForm.Group>
      {props.popupData.screen === 'event' && (
        <InputForm.Group>
          <label htmlFor='targetId'>이동할 이벤트 페이지 </label>
          <Select
            name='targetId'
            onChange={props.onChange}
            value={props.popupData.targetId as number}
          >
            {renderTargetIdOptions()}
          </Select>
        </InputForm.Group>
      )}
      {props.popupData.screen === 'webView' && (
        <InputForm.Group>
          <label htmlFor='url'>CTA 링크</label>
          <input
            type='url'
            name='url'
            placeholder='CTA 링크'
            value={props.popupData.url as string}
            onChange={props.onChange}
          />
        </InputForm.Group>
      )}
      <InputForm.Group>
        <label htmlFor='description'>팝업 설명</label>
        <input
          type='text'
          name='description'
          placeholder='팝업에 대한 설명을 입력하세요'
          value={props.popupData.description as string}
          onChange={props.onChange}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='image'>이미지 등록</label>
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={props.onChange}
        />
      </InputForm.Group>
      {props.imagePreview && (
        <InputForm.Group>
          <label>이미지 미리보기</label>
          <img
            src={props.imagePreview}
            style={{ width: '250px', maxHeight: '250px', objectFit: 'cover' }}
          />
        </InputForm.Group>
      )}
      <InputForm.Group>
        <RoundButton primary>생성하기</RoundButton>
      </InputForm.Group>
    </InputForm>
  );
};

export default CreatePopupForm;
