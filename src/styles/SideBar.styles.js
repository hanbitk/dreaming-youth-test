import styled from 'styled-components';

export const StSideBarContainer = styled.nav`
  border-right: 1px solid var(--color-gray);
  width: 20%;
  background-color: var(--color-cool-gray);
`;

export const StTransparentSideBar = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const StMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-block: 20px;
`;
