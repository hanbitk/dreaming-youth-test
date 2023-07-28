import React from 'react';
import { StInputRadio, StInputRadioBox, StInputRadioLabel } from '../../styles/Common.styles';

function Radiobox({ selectedRadioValue, selectedHandleOnChange, radioArray }) {
  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    selectedHandleOnChange(name);
  };

  return (
    <>
      {radioArray.map((select, idx) => {
        return (
          <StInputRadioBox key={idx}>
            <StInputRadio
              type='checkbox'
              id={select.id}
              name={select.name}
              checked={selectedRadioValue === select.name}
              onChange={handleCheckboxChange}
            />
            <StInputRadioLabel htmlFor={select.htmlFor}>{select.label}</StInputRadioLabel>
          </StInputRadioBox>
        );
      })}
    </>
  );
}

export default Radiobox;
