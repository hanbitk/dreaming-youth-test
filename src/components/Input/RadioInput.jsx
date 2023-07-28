import React from 'react';
import {
  StCheckedText,
  StDiv,
  StLabel,
  StRadioDiv,
  StRadioboxDiv
} from '../../styles/Common.styles';
import Radiobox from './Radiobox';

function RadioInput({ label, radioArray, selectedHandleOnChange, selectedRadioValue }) {
  return (
    <StDiv>
      <StLabel>{label}</StLabel>
      <StRadioDiv>
        <StRadioboxDiv>
          <Radiobox
            selectedRadioValue={selectedRadioValue}
            selectedHandleOnChange={selectedHandleOnChange}
            radioArray={radioArray}
          />
        </StRadioboxDiv>
        {selectedRadioValue === '선택 3' && (
          <StCheckedText>* 선택시 텍스트가 표시됩니다.</StCheckedText>
        )}
      </StRadioDiv>
    </StDiv>
  );
}

export default RadioInput;
