import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StMenu = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: var(--font-regular);
  cursor: pointer;
`;

export const StMenuTitle = styled.li`
  padding: 8px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-dark-black);

  &:hover {
    background-color: var(--color-gray-hover);
    color: var(--color-dark-black);
  }
`;

export const StMenuItemLink = styled(Link)`
  color: var(--color-gray-inactive);
  text-decoration: none;
`;

export const StMenuList = styled.li`
  padding: 8px 40px;
  color: var(--color-gray-inactive);
  background-color: ${(props) => props.isactive || null};

  &:hover {
    background-color: ${(props) => (props.isactive ? 'none' : 'var(--color-gray-hover)')};
    color: var(--color-gray-inactive);
  }
`;
