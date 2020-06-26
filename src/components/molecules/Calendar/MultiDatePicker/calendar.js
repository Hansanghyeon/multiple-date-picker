// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { DayPickerSingleDateController, CalendarDay } from 'react-dates';
// function
import HoliDayFilter from './HoliDayFilter';
// component

const MultiDatePickerCalendar = () => {
  const [dates, setDates] = useState([]);
  const handleChange = (date) => {
    const newDates = dates.includes(date)
      ? dates.filter((d) => !date.isSame(d))
      : [...dates, date];

    setDates(newDates);
  };
  useEffect(() => {
    console.log(dates);
  });
  return (
    <DayPickerSingleDateController
      numberOfMonths={1}
      onDateChange={handleChange}
      hideKeyboardShortcutsPanel
      noBorder
      monthFormat="YYYY년 MMMM"
      renderCalendarDay={(props) => {
        const { day, modifiers } = props;

        if (dates.includes(day)) {
          modifiers && modifiers.add('selected');
        } else {
          modifiers && modifiers.delete('selected');
        }

        return <CalendarDay {...props} modifiers={modifiers} />;
      }}
      isDayBlocked={(day) => HoliDayFilter(day)}
    />
  );
};
export default MultiDatePickerCalendar;
