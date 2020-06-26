import React from 'react';
import { useForm } from 'react-hook-form';
// components
import Postcode from '@molecule/Postcode';
import { Col, Row } from './index.style';
import MultiDatePicker from '@molecule/Calendar/MultiDatePicker';

const CreatePost = ({ title }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="StudyEvent">주 지도종목</label>
            <input
              id="StudyEvent"
              name="주 지도종목"
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="totalStudyTime">총 지도시간</label>
            <input
              id="totalStudyTime"
              name="총 지도시간"
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <span>장소 선택</span>
            <input type="button" value={'test'} />
          </Col.Input>
        </Row.Def>
        <MultiDatePicker />
        <Row.Def>
          <Col.Input col>
            <label htmlFor="totalTime">총 지도시간</label>
            <input
              id="totalTime"
              name="장소 담당자 이름"
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="manager">장소 담당자 연락처</label>
            <input
              id="manager"
              name="장소 담당자 연락처"
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="manager">장소 담당자 연락처</label>
            <input
              id="manager"
              name="장소 담당자 연락처"
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
        </Row.Def>
        {errors.email && errors.email.message}
        {errors.username && errors.username.message}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreatePost;
