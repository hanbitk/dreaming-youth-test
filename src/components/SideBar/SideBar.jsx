import React from 'react';
import { StTransparentSideBar, StSideBarContainer, StMenuBox } from '../../styles/SideBar.styles';
import Menu from '../Menu/Menu';

function SideBar() {
  const menuList = [
    { name: '소메뉴', path: '/detail' },
    { name: '소메뉴', path: '/detail2' }
  ];

  const menuList2 = [
    { name: '소메뉴', path: '/detail3' },
    { name: '소메뉴', path: '/detail4' }
  ];
  return (
    <StSideBarContainer>
      <StTransparentSideBar>
        <StMenuBox>
          <Menu menuList={menuList} />
          <Menu menuList={menuList2} />
        </StMenuBox>
      </StTransparentSideBar>
    </StSideBarContainer>
  );
}

export default SideBar;
