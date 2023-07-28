import React from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <StContainer>
      <SideBar />
      <Outlet />
    </StContainer>
  );
}

export default Layout;

const StContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`;
