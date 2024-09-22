import {
  Drawer,
  IconButton,
} from '@mui/material';
import {  IconAndBurger } from '../headerStyle';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import ListSideBar from './ListSideBar';

const SideBar = () => {

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      [anchor]: open,
    }));
  };




  const list = (anchor) => (
<ListSideBar anchor={anchor}/>
  );

  return (
    <>
      <IconAndBurger>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            fontSize: 44,
          }}
          onClick={toggleDrawer('right', true)}
          size="large"
        >
          <MenuIcon fontSize="3rem" />
        </IconButton>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor} >
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              style={{zIndex: 10000}}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </IconAndBurger>
    </>
  );
};

export default SideBar;
