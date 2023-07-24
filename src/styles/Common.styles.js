import styled from 'styled-components';

export const StButton = styled.button`
  width: 74px;
  height: 40px;
  background-color: var(--color-primary);
  border-radius: var(--size-border-radius);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;
