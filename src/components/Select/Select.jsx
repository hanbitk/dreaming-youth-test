/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StOption, StSelect, StSelectLabel, StSelectOptions } from '../../styles/Common.styles';
import down_arrow from '../../icons/SelectBox/gnb_down_arrow.svg';
import useFocus from '../../Hooks/useFocus';

function Select({ changeMonth, changeYear, value, optionData }) {
  const [isFocused, handleFocusBlurSelect] = useFocus();
  const [currentValue, setCurrentValue] = useState(value);
  const [options, setOptions] = useState(false);
  const months = optionData.length === 12;

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.value);
    if (optionData.length === 12) changeMonth(optionData.indexOf(e.target.value));
    else changeYear(Number(e.target.value.split('년')[0]));
  };

  const showOptions = () => {
    setOptions(!options);
    handleFocusBlurSelect();
  };

  return (
    <StSelect $months={months} onClick={showOptions} $isFocused={isFocused}>
      <StSelectLabel>{months ? value : `${value}년`}</StSelectLabel>
      <img src={down_arrow} alt='' />
      {options && (
        <StSelectOptions $months={months}>
          {optionData.map((option) => {
            return (
              <StOption onClick={handleOnChangeSelectValue} key={option} value={option}>
                {option}
              </StOption>
            );
          })}
        </StSelectOptions>
      )}
    </StSelect>
  );
}

export default Select;
