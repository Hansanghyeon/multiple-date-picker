import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TimelineLite } from 'gsap';
// components
import Postcode from '@molecule/Postcode';
import { Col, Row } from './index.style';
import MultiDatePicker from '@molecule/Calendar/MultiDatePicker';

const CreatePost = ({ title }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  const DaumMap = useRef(null);
  const [mapValue, setMapValue] = useState('예) 판교역 235, 분당 주공');
  const [mapToggleState, setMapToggleState] = useState(false);
  const mapToggleHandle = () => {
    const tl = new TimelineLite();
    tl.to(DaumMap.current, 0, {
      display: () => (!mapToggleState ? 'block' : 'none'),
    });
    setMapToggleState(!mapToggleState);
  };

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="StudyEvent">주 지도종목</label>
            <input
              id="StudyEvent"
              name="StudyEvent"
              ref={register({
                required: 'Required',
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
          <Col.Def auto>
            {errors.StudyEvent && errors.StudyEvent.message}
          </Col.Def>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="totalStudyTime">총 지도시간</label>
            <input
              id="totalStudyTime"
              name="totalStudyTime"
              type="number"
              ref={register({
                required: 'Required',
              })}
            />
          </Col.Input>
          <Col.Def auto>
            {errors.totalStudyTime && errors.totalStudyTime.message}
          </Col.Def>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <span>장소 선택</span>
            <input type="button" value={mapValue} onClick={mapToggleHandle} />
          </Col.Input>
          <Col.Def auto></Col.Def>
          <Col.Map col={12} ref={DaumMap}>
            <Postcode setState={setMapValue} toggle={mapToggleHandle} />
          </Col.Map>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <MultiDatePicker />
          </Col.Input>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="managerName">장소 담당자 이름</label>
            <input
              id="managerName"
              name="managerName"
              ref={register({
                required: 'Required',
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
          <Col.Def auto>
            {errors.managerName && errors.managerName.message}
          </Col.Def>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <label htmlFor="managerContact">장소 담당자 연락처</label>
            <input
              id="managerContact"
              name="managerContact"
              ref={register({
                required: 'Required',
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
            />
          </Col.Input>
          <Col.Def auto>
            {errors.managerContact && errors.managerContact.message}
          </Col.Def>
        </Row.Def>
        <Row.Def>
          <Col.Input col>
            <textarea
              id="content"
              name="장소 담당자 연락처"
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
              placeholder="content"
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
