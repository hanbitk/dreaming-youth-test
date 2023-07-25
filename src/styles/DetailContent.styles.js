import styled from 'styled-components';

export const StDetailContainer = styled.div`
  border: 1px solid blue;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StInfo = styled.div`
  border: 1px solid pink;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

export const StDetailHeader = styled.header`
  width: 943px;
  height: 64px;
  margin-top: 40px;
`;

export const StDetailForm = styled.form`
  border-top: 1px solid var(--color-gray);
  width: 943px;
  height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StDetailFormBox = styled.div`
  width: 100%;
  height: 422px;
  margin-block: 16px;
`;

export const StDetailFormButton = styled.div`
  border-top: 1px solid var(--color-gray);
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
