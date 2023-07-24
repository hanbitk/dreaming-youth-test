import React, { useState } from 'react';
import { StInput, StInputBox, StLabel } from '../../styles/Common.styles';

function Input() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusBlurInput = () => {
    setIsFocused(!isFocused);
  };

  return (
    <StInputBox>
      <StLabel>정보2</StLabel>
      <StInput
        onFocus={handleFocusBlurInput}
        onBlur={handleFocusBlurInput}
        $isFocused={isFocused}
      />
    </StInputBox>
  );
}

export default Input;
