import styled from 'styled-components';
// import down_arrow from '../icons/SelectBox/gnb_down_arrow.svg';

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

// SELECT STYLE //
export const StSelect = styled.div`
  position: relative;
  width: ${(props) => (props.$months ? '72px' : '100px')};
  height: 34px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border-radius: var(--size-border-radius);
  background-color: var(--color-white);
  border: ${(props) =>
    props.$isFocused ? '3px solid var(--color-primary-light)' : '1px solid var(--color-gray)'};
  box-shadow: ${(props) =>
    props.$isFocused ? 'inset 0px 0px 0px 1px var(--color-primary)' : null};
  padding: ${(props) => (props.$isFocused ? '5px 8px' : '5px 10px')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isFocused ? null : 'var(--color--white-select-box)')};
    border: ${(props) => (props.$isFocused ? null : '1px solid var(--color-gray-select-hover)')};
  }
`;

export const StSelectLabel = styled.label``;

export const StSelectOptions = styled.ul`
  position: absolute;
  overflow: hidden;
  top: 31px;
  left: -3px;
  width: ${(props) => (props.$months ? '72px' : '100px')};
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: var(--size-border-radius);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.16);
`;

export const StOption = styled.option`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  padding: 8px 10px;

  &:hover {
    background-color: var(--color-cool-gray);
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
