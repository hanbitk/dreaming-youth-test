import React from 'react';
import { StCheckBoxDiv, StDiv, StLabel } from '../../styles/Common.styles';
import Checkbox from './Checkbox';

function CheckboxInput({ label, checkBoxArray, onChange }) {
  return (
    <StDiv>
      <StLabel>{label}</StLabel>
      <StCheckBoxDiv>
        <Checkbox checkBoxArray={checkBoxArray} onChange={onChange} />
      </StCheckBoxDiv>
    </StDiv>
  );
}

export default CheckboxInput;
