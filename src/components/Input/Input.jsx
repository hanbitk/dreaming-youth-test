import React from 'react';
import { StDiv, StInput, StLabel } from '../../styles/Common.styles';
import useFocus from '../../Hooks/useFocus';

function Input({ label, value, onChange, name }) {
  const [isFocused, handleFocusBlurInput] = useFocus();

  return (
    <StDiv>
      <StLabel>{label}</StLabel>
      <StInput
        value={value}
        name={name}
        onChange={onChange}
        onFocus={handleFocusBlurInput}
        onBlur={handleFocusBlurInput}
        $isFocused={isFocused}
      />
    </StDiv>
  );
}

export default Input;
