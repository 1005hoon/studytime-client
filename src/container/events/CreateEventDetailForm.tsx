import React from 'react';
import RoundButton from '../../components/buttons/round-button';
import InputForm from '../../components/forms/input-form';
import Select from '../../components/forms/select';
import { IEventDetail } from '../../utils/types/event-detail.interface';

interface CreateEventDetailFormProps {
  eventDetail: Partial<IEventDetail>;
  imagePreview: string;
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
        <label htmlFor='inProgress'>진행여부</label>
        <Select
          name='inProgress'
          value={props.eventDetail.inProgress === true ? 1 : 0}
          onChange={props.onChange}
        >
          <option value={1}>진행중</option>
          <option value={0}>종료</option>
        </Select>
      </InputForm.Group>
      <InputForm.Group>
        <label htmlFor='description'>상세내용</label>
        <input
          type='text'
          name='description'
          placeholder='상세내용을 입력하세요. 예) 동기부여 X Hoonnote 특별 이벤트용 배너'
          value={props.eventDetail.description as string}
          onChange={props.onChange}
        />
      </InputForm.Group>
      {props.eventDetail.type === '상세' && (
        <>
          <InputForm.Group>
            <label htmlFor='urlButtonName1'>첫번째 버튼 문구</label>
            <input
              type='text'
              name='urlButtonName1'
              placeholder='첫번째(좌측) 버튼 문구 '
              value={props.eventDetail.urlButtonName1 as string}
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
          <InputForm.Group>
            <label htmlFor='urlButtonName2'>두번째 버튼 문구</label>
            <input
              type='text'
              name='urlButtonName2'
              placeholder='두번째(우측) 버튼 문구 '
              value={props.eventDetail.urlButtonName2 as string}
              onChange={props.onChange}
            />
          </InputForm.Group>
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
        </>
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

export default CreateEventDetailForm;
