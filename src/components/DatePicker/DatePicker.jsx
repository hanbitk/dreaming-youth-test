import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { getYear, getMonth } from 'date-fns';
import range from 'lodash/range';
import useFocus from '../../Hooks/useFocus';
import Select from '../Select/Select';
import { StArrow, StDatePicker, StHeader, StSelectBox } from '../../styles/DatePicker.styles';
import { StDiv, StTitle } from '../../styles/Common.styles';

import back_default from '../../icons/DatePicker/calender_back_default.svg';
import next_default from '../../icons/DatePicker/calender_next_default.svg';

function DatePicker({ title, selectedDate, onChange }) {
  const [isFocused, handleFocusBlurInput, datePickerRef] = useFocus();

  const years = range(2020, getYear(new Date()) + 1, 1)
    .join()
    .split(',')
    .map((year) => year + '년');

  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ];

  return (
    <StDiv ref={datePickerRef}>
      <StTitle>{title}</StTitle>
      <StDatePicker
        placeholderText='yyyy.mm.dd'
        selected={selectedDate}
        locale={ko}
        dateFormat='yyyy.MM.dd'
        onChange={onChange}
        className='custom-input'
        dayClassName={(date) =>
          date.getDate() === selectedDate.getDate() ? 'selectedDay' : 'unselectedDay'
        }
        onFocus={handleFocusBlurInput}
        onBlur={handleFocusBlurInput}
        $isFocused={isFocused}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <StHeader>
            <StArrow
              src={back_default}
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            />

            <StSelectBox>
              <Select value={getYear(date)} changeYear={changeYear} optionData={years} />
              <Select
                value={months[getMonth(date)]}
                changeMonth={changeMonth}
                optionData={months}
              />
            </StSelectBox>

            <StArrow
              src={next_default}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            />
          </StHeader>
        )}
      />
    </StDiv>
  );
}

export default DatePicker;
