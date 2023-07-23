/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { StMenu, StMenuTitle, StMenuItemLink } from '../../styles/Menu.styles';
import fold_inactive from '../../icons/SideBar/gnb_fold_inactive.svg';
import unfold_inactive from '../../icons/SideBar/gnb_unfold_inactive.svg';
import fold_active from '../../icons/SideBar/gnb_fold_active.svg';
import MenuItem from './MenuItem';
import { useLocation } from 'react-router-dom';

function Menu({ menuList }) {
  const [unfold, setUnfold] = useState(false);

  const pathName = useLocation().pathname;

  const handleFoldUnfold = () => setUnfold(!unfold);

  return (
    <StMenu>
      <StMenuTitle onClick={handleFoldUnfold}>
        대메뉴
        {unfold ? (
          <img src={fold_inactive} alt='' /> && <img src={fold_active} />
        ) : (
          <img src={unfold_inactive} alt='' />
        )}
      </StMenuTitle>
      {unfold &&
        menuList.map((menu, idx) => (
          <StMenuItemLink to={menu.path} key={idx}>
            <MenuItem menu={menu} isActive={pathName === menu.path ? true : false} />
          </StMenuItemLink>
        ))}
    </StMenu>
  );
}

export default Menu;
