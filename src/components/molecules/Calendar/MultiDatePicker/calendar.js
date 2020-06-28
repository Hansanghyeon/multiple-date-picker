// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  DayPickerSingleDateController,
  CalendarDay,
  isSameDay,
} from 'react-dates';
// function
import HoliDayFilter from './HoliDayFilter';
// component
import { RectDatesOverrides } from './index.style';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';

const MultiDatePickerCalendar = ({ presets }) => {
  const [dates, setDates] = useState([]);
  const handleChangeMulti = (days) => {
    // dates array
    // 선택되어이지 않은 값들만 전달받음
    setDates([...dates, ...days]);
  };
  const handleChange = (date) => {
    let isNewDates = false;
    for (let i in dates) {
      if (isSameDay(date, dates[i])) isNewDates = true;
    }
    const newDates = isNewDates //dates.includes(date)
      ? dates.filter((d) => !date.isSame(d))
      : [...dates, date];

    setDates(newDates);
  };
  useEffect(() => {
    console.log(dates);
  });
  const rednerDatePresets = () => {
    return <div onClick={() => setDates([])}>초기화</div>;
  };
  return (
    <>
      <RectDatesOverrides />
      <DayPickerSingleDateController
        numberOfMonths={1}
        onDateChange={handleChange}
        hideKeyboardShortcutsPanel
        noBorder
        renderMonthElement={(props) =>
          MonthHeader({ ...props, handleChangeMulti })
        }
        renderWeekHeaderElement={WeekHeader}
        renderCalendarDay={(props) => {
          const { day, modifiers } = props;

          props.ariaLabelFormat = 'YYYY-MM-DD/MM-dddd';
          let isNewDate = false;
          for (let i in dates) {
            if (isSameDay(dates[i], day)) isNewDate = true;
          }
          if (isNewDate) {
            modifiers && modifiers.add('selected');
            props.ariaLabelFormat = props.ariaLabelFormat && null;
          } else modifiers && modifiers.delete('selected');

          return <CalendarDay {...props} modifiers={modifiers} />;
        }}
        isDayBlocked={(day) => HoliDayFilter(day)}
        renderCalendarInfo={rednerDatePresets}
        onNextMonthClick={(props) => {
          console.log(props);
        }}
      />
      <input
        type="hidden"
        value={dates.map((e) => e.format('YYYY-MM-DD')).join()}
      />
    </>
  );
};
export default MultiDatePickerCalendar;
