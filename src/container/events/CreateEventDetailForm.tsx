import React from 'react';
import InputForm from '../../components/forms/input-form';
import Select from '../../components/forms/select';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface CreateEventDetailFormProps {
  eventDetail?: Partial<IEventDetail>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const CreateEventDetailForm: React.FC<CreateEventDetailFormProps> = (props) => {
  return (
    <InputForm>
      <InputForm.Group>
        <label htmlFor='type'>유형</label>
        <Select>
          <option value='' selected disabled hidden>
            유형을 선택하세요
          </option>
          <option value='배너'>배너</option>
          <option value='상세'>상세 페이지</option>
          <option value='팝업'>팝업 페이지</option>
        </Select>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='description'>이벤트 이름</label>
        <input
          type='text'
          name='description'
          placeholder='이벤트 이름을 입력하세요. 예) 동기부여 X Hoonnote 특별 이벤트'
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='url1'>CTA 링크 1</label>
        <input type='url' name='url1' placeholder='첫번째 CTA에 적용할 링크 ' />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='url2'>CTA 링크 2</label>
        <input type='url' name='url2' placeholder='두번째 CTA에 적용할 링크' />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='img'>사용할 이미지</label>
        <input type='text' name='img' />
      </InputForm.Group>
    </InputForm>
  );
};

export default CreateEventDetailForm;
