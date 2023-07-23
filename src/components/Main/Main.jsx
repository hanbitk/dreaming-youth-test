import React from 'react';
import SideBar from '../SideBar/SideBar';
import DetailContent from '../DetailContent/DetailContent';
import { StContainer } from '../../styles/Main.styles';

function Main() {
  return (
    <StContainer>
      <SideBar />
      <DetailContent />
    </StContainer>
  );
}

export default Main;
