'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Drawer as MuiDrawer } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import menuItemList from '@/components/organism/Header/headerList';
import MenuIcon from '@mui/icons-material/Menu';

export default function BurgerMenuDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        {menuItemList.map((menuItem) => (
          <ListItem key={menuItem.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={menuItem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={openDrawer}>
        <MenuIcon />
      </Button>
      <MuiDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        {list()}
      </MuiDrawer>
    </div>
  );
}
