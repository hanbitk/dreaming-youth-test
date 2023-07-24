import React from 'react';
import { StDiv, StInfoTitle } from '../../styles/Common.styles';

function Info({ title, description }) {
  return (
    <StDiv>
      <StInfoTitle>{title}</StInfoTitle>
      <p>{description}</p>
    </StDiv>
  );
}

export default Info;
