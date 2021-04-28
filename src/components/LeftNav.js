import React, { useContext, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PlayPageContext from '../context/play-page-context';

function LeftNav() {
  const { selectedMenu, dispatch } = useContext(PlayPageContext);

  const changeMenu = (item) => {
    dispatch({ type: 'CHANGE_SELECTED_MENU_ITEM', item })
  }

  return (
    <div className="leftNav">
      <MenuList>
        <MenuItem
          onClick={() => changeMenu(1)}
          selected={selectedMenu === 1}
        >Live Games</MenuItem>
        <MenuItem
          onClick={() => changeMenu(2)}
          selected={selectedMenu === 2}
        >Upcoming Games</MenuItem>
        <MenuItem
          onClick={() => changeMenu(3)}
          selected={selectedMenu === 3}
        >Game Settings</MenuItem>
      </MenuList>
    </div>
  )
}

export default LeftNav
