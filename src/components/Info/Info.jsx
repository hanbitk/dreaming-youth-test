import React from 'react';
import { StDiv, StTitle } from '../../styles/Common.styles';

function Info({ title, description }) {
  return (
    <StDiv>
      <StTitle>{title}</StTitle>
      <p>{description}</p>
    </StDiv>
  );
}

export default Info;
