import React from 'react';
import {
  StDetailContainer,
  StDetailForm,
  StDetailFormBox,
  StDetailFormButton,
  StDetailHeader
} from '../../styles/DetailContent.styles';
import Button from '../Button/Button';

function DetailContent() {
  return (
    <StDetailContainer>
      <StDetailHeader>
        <h3>타이틀</h3>
      </StDetailHeader>
      <StDetailForm>
        <StDetailFormBox>
          <div>
            <label>정보 1</label>
            <p>정보 내용</p>
          </div>
        </StDetailFormBox>
        <StDetailFormButton>
          <Button>저장</Button>
        </StDetailFormButton>
      </StDetailForm>
    </StDetailContainer>
  );
}

export default DetailContent;
