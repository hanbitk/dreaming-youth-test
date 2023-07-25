import styled from 'styled-components';

export const StDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 64px;
`;

// BUTTON STYLE //
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

// INPUT STYLE //
export const StLabel = styled.label`
  width: 140px;
`;

export const StInput = styled.input`
  width: 160px;
  height: 34px;
  border: ${(props) =>
    props.$isFocused ? '3px solid var(--color-primary-light)' : '1px solid var(--color-gray)'};
  box-shadow: ${(props) =>
    props.$isFocused ? 'inset 0px 0px 0px 1px var(--color-primary)' : null};
  border-radius: 5px;
  padding: 5px 12px;
  color: var(--color-light-black);
`;

// INFO STYLE //
export const StTitle = styled.p`
  width: 140px;
`;
