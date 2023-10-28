import React, { useState, useEffect } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './style';

const defaultList = [];
export function DatePicker({list=defaultList}) {//lidt = agended days ex: '20/11/2023'
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const [years, setYears] = useState([]);
  const [selectedYear,] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const [months] = useState([
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' },
  ]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 3 }, (_, index) => currentYear + index);
    setYears(yearOptions);
  }, []);

  const incrementMonth = () => {
    setSelectedMonth(prevMonth => (prevMonth + 1) % 12);
  };

  const decrementMonth = () => {
    setSelectedMonth(prevMonth => (prevMonth - 1 + 12) % 12);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Function to get the number of days in the month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the day of the week on which the month starts
  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1);
    return firstDay.getDay() === 0 ? 7 : firstDay.getDay();
  };

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
  const firstDayOfMonth = getFirstDayOfMonth(selectedYear, selectedMonth);

  // Calculate days from the previous month to fill the grid
  const daysFromPrevMonth = [];
  const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
  const daysInPrevMonth = getDaysInMonth(selectedYear, prevMonth);
  for (let i = daysInPrevMonth - firstDayOfMonth + 1; i <= daysInPrevMonth; i++) {
    daysFromPrevMonth.push(i);
  }

  // Calculate days from the next month to fill the grid
  const daysFromNextMonth = [];
  const totalDays = daysInMonth + firstDayOfMonth;
  const remainingDays = 43 - totalDays;
  for (let i = 1; i <= remainingDays; i++) {
    daysFromNextMonth.push(i);
  }

  return (
    <Styled.DatePickerContent>
      <Styled.ContentTop>
        <Styled.Select name='year' onChange={(e) => console.log('Selected Year:', e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Styled.Select>

        <Styled.Select name='month' value={selectedMonth} onChange={handleMonthChange}>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </Styled.Select>

        <Styled.Flex>
          <Styled.ContentIcon onClick={decrementMonth}>
            <Styled.Icon icon={faChevronUp} />
          </Styled.ContentIcon>
          <Styled.ContentIcon onClick={incrementMonth}>
            <Styled.Icon icon={faChevronDown} />
          </Styled.ContentIcon>
        </Styled.Flex>
      </Styled.ContentTop>
      <Styled.GridDays>
  <p>seg</p>
  <p>ter</p>
  <p>qua</p>
  <p>qui</p>
  <p>sex</p>
  <p>sab</p>
  <p>dom</p>
  {daysFromPrevMonth.slice(1).map((day) => (  // Começa do segundo dia
    <Styled.Circle key={day} status='inactive'>
      {day}
    </Styled.Circle>
  ))}

  {Array.from({ length: daysInMonth }, (_, index) => {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();

    const day = index + 1;

    // Verifica se o dia está na lista de agendados
    const isAgended = list.includes(`${selectedYear}-${selectedMonth + 1}-${day}`);

    return (
      <Styled.Circle
        key={day}
        status={
          (day === currentDate && selectedMonth === currentMonth && !isAgended) ? 'today' :
          (day === currentDate && selectedMonth === currentMonth && isAgended) ? 'agendedToday' :
          (isAgended ? 'agended' : 'active')
        }
      >
        {day}
      </Styled.Circle>
    );
  })}
  
  {daysFromNextMonth.map((day) => (
    <Styled.Circle key={day} status='inactive'>
      {day}
    </Styled.Circle>
  ))}
</Styled.GridDays>
    </Styled.DatePickerContent>
  );
}
