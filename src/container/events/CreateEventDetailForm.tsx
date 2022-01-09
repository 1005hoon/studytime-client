import React from 'react';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import Select from '../../components/forms/select';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface CreateEventDetailFormProps {
  eventDetail: Partial<IEventDetail>;
  onChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const CreateEventDetailForm: React.FC<CreateEventDetailFormProps> = (props) => {
  return (
    <InputForm onSubmit={props?.onSubmit}>
      <InputForm.Group>
        <label htmlFor='type'>유형</label>
        <Select
          name='type'
          value={props.eventDetail.type as string}
          onChange={props.onChange}
        >
          <option value='배너'>배너</option>
          <option value='상세'>상세 페이지</option>
        </Select>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='description'>이벤트 이름</label>
        <input
          type='text'
          name='description'
          placeholder='이벤트 이름을 입력하세요. 예) 동기부여 X Hoonnote 특별 이벤트'
          value={props.eventDetail.description as string}
          onChange={props.onChange}
        />
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='url1'>CTA 링크 1</label>
        <input
          type='url'
          name='url1'
          placeholder='첫번째 CTA에 적용할 링크 '
          value={props.eventDetail.url1 as string}
          onChange={props.onChange}
        />
      </InputForm.Group>
      {props.eventDetail.type === '상세' && (
        <InputForm.Group>
          <label htmlFor='url2'>CTA 링크 2</label>
          <input
            type='url'
            name='url2'
            placeholder='두번째 CTA에 적용할 링크'
            value={props.eventDetail.url2 as string}
            onChange={props.onChange}
          />
        </InputForm.Group>
      )}
      <InputForm.Group>
        <label htmlFor='img_url'>이미지 등록</label>
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={props.onChange}
        />
      </InputForm.Group>
      <InputForm.Group>
        <RoundButton primary>생성하기</RoundButton>
      </InputForm.Group>
    </InputForm>
  );
};

export default CreateEventDetailForm;
