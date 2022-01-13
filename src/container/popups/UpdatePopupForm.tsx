import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import Select from '../../components/forms/select';
import Loading from '../../components/loading';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { IEvent } from '../../utils/types/event.interface';
import { IPopup } from '../../utils/types/popup.interface';

interface UpdatePopupFormProps {
  popup: IPopup;
  eventList: IEvent[];
}

const UpdatePopupForm: React.FC<UpdatePopupFormProps> = (props) => {
  const navigate = useNavigate();
  const { handleUpdatePopupById } = useActions();
  const { error, loading } = useTypedSelector((state) => state.popups);
  const [popupData, setPopupData] = useState({ ...props.popup });
  const [popupImage, setPopupImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState(props.popup.imgUrl);

  const onPopupUpdate = () => {
    if (!popupData.screen) {
      return alert('팝업 유형을 선택해주세요');
    }

    if (popupData.screen === 'event' && popupData.targetId === -99) {
      return alert('이동할 이벤트 페이지를 선택해주세요');
    }

    if (popupData.screen === 'webView' && !popupData.url) {
      return alert('CTA 링크를 입력하세요');
    }

    if (!popupData.description) {
      return alert('팝업 식별을 위한 간단한 설명을 작성해주세요');
    }

    if (!popupImage && popupData.imgUrl === '') {
      return alert('팝업 이미지를 선택해주세요');
    }

    if (!window.confirm('팝업을 수정할까요??')) {
      return;
    }

    const formData = new FormData();

    if (popupImage) {
      formData.append('image', popupImage);
    }

    Object.keys(popupData).forEach((key) => {
      if (key) {
        formData.append(key, popupData[key] as string);
      }
    });

    handleUpdatePopupById(popupData.id, formData);
  };

  const onPopupDelete = () => {};

  const onPopupDataChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value, files } = e.currentTarget;

    if (name === 'image') {
      const file = (files as FileList)[0];
      setPopupImage(() => file);
      setImagePreview(() => URL.createObjectURL(file));
    } else {
      if (name === 'useYn' && value === '1') {
        alert(
          '팝업 사용여부를 사용중으로 설정하면, 기존 등록된 팝업들이 사용중지 됩니다!'
        );
      }

      setPopupData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const renderTargetIdOptions = () => {
    return props.eventList.map((event) => (
      <option value={event.id} key={event.id}>
        {event.name}
      </option>
    ));
  };

  return (
    <InputForm onSubmit={(e) => e.preventDefault()}>
      <InputForm.Group>
        <label htmlFor='useYn'>팝업 사용여부</label>
        <Select
          name='useYn'
          onChange={onPopupDataChange}
          value={popupData.useYn as number}
        >
          <option value={0}>중지</option>
          <option value={1}>사용중</option>
        </Select>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='screen'>팝업 유형</label>
        <Select
          name='screen'
          onChange={onPopupDataChange}
          value={popupData.screen as string}
        >
          <option value='event'>이벤트</option>
          <option value='notice'>공지사항</option>
          <option value='webView'>웹뷰</option>
        </Select>
      </InputForm.Group>
      {popupData.screen === 'event' && (
        <InputForm.Group>
          <label htmlFor='targetId'>이동할 이벤트 페이지 </label>
          <Select
            name='targetId'
            onChange={onPopupDataChange}
            value={popupData.targetId as number}
          >
            {renderTargetIdOptions()}
          </Select>
        </InputForm.Group>
      )}
      {popupData.screen === 'webView' && (
        <InputForm.Group>
          <label htmlFor='url'>CTA 링크</label>
          <input
            type='url'
            name='url'
            placeholder='CTA 링크'
            value={popupData.url as string}
            onChange={onPopupDataChange}
          />
        </InputForm.Group>
      )}
      <InputForm.Group>
        <label htmlFor='description'>팝업 설명</label>
        <input
          type='text'
          name='description'
          placeholder='팝업에 대한 설명을 입력하세요'
          value={popupData.description as string}
          onChange={onPopupDataChange}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='image'>이미지 등록</label>
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={onPopupDataChange}
        />
      </InputForm.Group>
      {imagePreview && (
        <InputForm.Group>
          <label>이미지 미리보기</label>
          <img
            src={imagePreview}
            style={{ width: '250px', maxHeight: '250px', objectFit: 'cover' }}
          />
        </InputForm.Group>
      )}
      <InputForm.Group justify>
        <RoundButton width='100%' onClick={onPopupDelete}>
          삭제하기
        </RoundButton>
        <RoundButton width='100%' primary onClick={onPopupUpdate}>
          수정하기
        </RoundButton>
      </InputForm.Group>
    </InputForm>
  );
};

export default UpdatePopupForm;
