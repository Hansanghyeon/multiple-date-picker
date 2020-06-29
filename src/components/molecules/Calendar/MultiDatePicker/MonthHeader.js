import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const UL = styled.ul`
  position: absolute;
  top: 82px;
`;
const Btn = styled.div`
  border: 0;
  width: 100%;
  color: #82888a;
  outline: none;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    background-color: #ffa800;
    color: #fff;
    cursor: pointer;
  }
`;

const WeekHeaderInput = ({ month, handleChangeMulti }) => {
  const dayHandle = (dayName) => {
    const dddd = document.querySelectorAll(
      `table.CalendarMonth_table td[aria-label*="/${month}-${dayName}요일"]:not(.CalendarDay__blocked_calendar):not(.CalendarDay__blocked_out_of_range)`,
    );
    let result = [];
    dddd.forEach((day) => {
      const date = day.getAttribute('aria-label').replace(/\/.*/g, '');
      result.push(
        moment(date).set({
          hour: 12,
          minute: 0,
          second: 0,
          millisecond: 0,
        }),
      );
    });
    handleChangeMulti(result);
  };
  return (
    <UL className="DayPicker_weekHeader_ul DayPicker_weekHeader_ul_1">
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('일')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('월')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('화')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('수')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('목')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('금')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
      <li
        className="DayPicker_weekHeader_li DayPicker_weekHeader_li_1"
        style={{ width: '39px' }}
      >
        <Btn onClick={() => dayHandle('토')}>
          <FontAwesomeIcon icon={faCheck} />
        </Btn>
      </li>
    </UL>
  );
};

const MonthHeader = ({ month, handleChangeMulti }) => {
  return (
    <>
      <strong id={`MonthTitle${month.format('MM')}`}>
        {month.format('YYYY년 MMMM')}
      </strong>
      <WeekHeaderInput
        month={month.format('MM')}
        handleChangeMulti={handleChangeMulti}
      />
    </>
  );
};

export default MonthHeader;
