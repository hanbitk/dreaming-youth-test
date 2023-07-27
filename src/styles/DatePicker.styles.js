import styled from 'styled-components';
import Datepicker from 'react-datepicker';

// DATEPICKER STYLE//
export const StDatePicker = styled(Datepicker)`
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

export const StHeader = styled.div`
  width: 236px;
  display: flex;
  justify-content: space-between;
`;

export const StArrowDiv = styled.div``;

export const StArrow = styled.img`
  cursor: pointer;
`;

export const StSelectBox = styled.div`
  display: flex;
  width: 176px;
  justify-content: space-between;
`;
