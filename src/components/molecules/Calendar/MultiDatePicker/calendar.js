// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  DayPickerSingleDateController,
  CalendarDay,
  isSameDay,
  isInclusivelyBeforeDay,
} from 'react-dates';
// function
import HoliDayFilter from './HoliDayFilter';
import moment from 'moment';
// component
import { RectDatesOverrides, ResetBtn } from './index.style';
import MonthHeader from './MonthHeader';
import WeekHeader from './WeekHeader';

const MultiDatePickerCalendar = () => {
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
    const rangeText =
      moment(dates.map((e) => e.format('YYYY-MM-DD')).sort()[0]).format(
        'YYYY-MM-01',
      ) +
      ' ~ ' +
      moment(
        dates.map((e) => e.format('YYYY-MM-DD')).sort()[dates.length - 1],
      ).format('YYYY-MM-31');
    return (
      <>
        <ResetBtn onClick={() => setDates([])}>초기화</ResetBtn>

        <input
          type="hidden"
          id="kboard_option_multidatepicker"
          name="kboard_option_multidatepicker"
          value={dates
            .map((e) => e.format('YYYY-MM-DD'))
            .sort()
            .join()}
        />
        <input
          type="hidden"
          id="kboard_option_multidatepickerrange"
          name="kboard_option_multidatepickerrange"
          value={dates.length > 0 && rangeText}
        />
      </>
    );
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
        isOutsideRange={(day) =>
          isInclusivelyBeforeDay(day, moment().add(-1, 'days'))
        }
        verticalHeight="380px"
      />
    </>
  );
};
export default MultiDatePickerCalendar;
