import React, { useState } from 'react';
import { StDiv, StInput, StLabel } from '../../styles/Common.styles';

function Input({ label }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusBlurInput = () => {
    setIsFocused(!isFocused);
  };

  return (
    <StDiv>
      <StLabel>{label}</StLabel>
      <StInput
        onFocus={handleFocusBlurInput}
        onBlur={handleFocusBlurInput}
        $isFocused={isFocused}
      />
    </StDiv>
  );
}

export default Input;
