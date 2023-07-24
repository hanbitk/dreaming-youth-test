/* eslint-disable react/prop-types */
import React from 'react';
import { StMenuList } from '../../styles/Menu.styles';

function MenuItem({ menu, isActive }) {
  return <StMenuList $isActive={isActive ? 'var(--color-gray)' : null}>{menu.name}</StMenuList>;
}

export default MenuItem;
