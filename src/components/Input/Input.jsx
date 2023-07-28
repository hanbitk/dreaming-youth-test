import React, { useState } from 'react';
import { StDiv, StInput, StLabel } from '../../styles/Common.styles';
import useFocus from '../../Hooks/useFocus';

function Input({ label }) {
  const [isFocused, handleFocusBlurInput] = useFocus();
  const [value, setValue] = useState('');

  const handleOnChange = (e) => setValue(e.target.value);

  return (
    <StDiv>
      <StLabel>{label}</StLabel>
      <StInput
        value={value}
        onChange={handleOnChange}
        onFocus={handleFocusBlurInput}
        onBlur={handleFocusBlurInput}
        $isFocused={isFocused}
      />
    </StDiv>
  );
}

export default Input;
