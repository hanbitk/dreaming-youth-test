import React from 'react';
import {
  StDetailContainer,
  StDetailForm,
  StDetailFormBox,
  StDetailFormButton,
  StDetailHeader
} from '../../styles/DetailContent.styles';

function DetailContent() {
  return (
    <StDetailContainer>
      <StDetailHeader>
        <h2>타이틀</h2>
      </StDetailHeader>
      <StDetailForm>
        <StDetailFormBox>
          <div>
            <label>정보 1</label>
            <p>정보 내용</p>
          </div>
        </StDetailFormBox>
        <StDetailFormButton>저장</StDetailFormButton>
      </StDetailForm>
    </StDetailContainer>
  );
}

export default DetailContent;
