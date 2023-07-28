import React from 'react';
import { StCheckboxDiv, StInputCheckbox, StInputRadioLabel } from '../../styles/Common.styles';

function Checkbox({ checkBoxArray, onChange }) {
  return (
    <>
      {checkBoxArray.map((select, idx) => {
        return (
          <StCheckboxDiv key={idx}>
            <StInputCheckbox
              type='checkbox'
              id={select.id}
              name={select.name}
              value={select.value}
              onChange={onChange}
            />
            <StInputRadioLabel htmlFor={select.htmlFor}>{select.label}</StInputRadioLabel>
          </StCheckboxDiv>
        );
      })}
    </>
  );
}

export default Checkbox;
