'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {
  Divider,
  List, ListItem, Drawer as MuiDrawer, Stack, Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useAppSelector from '@/hooks/useAppSelector';

export default function RightMenuDrawer({ savedNotes, setSavedNotes }: any) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [whatToShow, setWhatToShow] = useState('articles');
  const allRoundsData = useAppSelector((state) => state.user.allRoundsData);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const deleteNote = (date: string) => {
    const newSavedNotes = savedNotes.filter((item: any) => item.date !== date);
    setSavedNotes(newSavedNotes);
    // console.log(newSavedNotes);
  };
  const changeData = (data: string) => {
    if (data === 'articles') {
      return setWhatToShow('articles');
    }
    return setWhatToShow('allRounds');
  };

  //   const showMeMore = () => {
  //     console.log(allRoundsData);
  //   };

  return (
    <div>
      <Button onClick={openDrawer}>
        <MenuIcon color="secondary" />
      </Button>

      <MuiDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <Box sx={{
          width: '550px',
        }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              p: 2,
            }}
          >
            <Button onClick={() => changeData('articles')}>Записи расходов</Button>
            <Button onClick={() => changeData('allRounds')}>Все ходы</Button>
          </Stack>
          {whatToShow === 'articles' ? savedNotes.map((item: any) => (
            <List
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2,
                alignItems: 'center',
              }}
              key={item.date}
            >
              <Box>
                <ListItem>
                  {item.whatHappened === 'Убавить' ? '-' : '+'}
                  {item.amount}
                </ListItem>
                <ListItem>
                  {item.note}
                </ListItem>
              </Box>
              <Box>
                <Button
                  disabled
                  onClick={() => deleteNote(item.date)}
                >
                  <DeleteForeverIcon />

                </Button>
              </Box>
            </List>
          ))
          // TODO - add any interface props
            : allRoundsData.map((itemRound: any) => (
              <List
                sx={{
                  justifyContent: 'space-between',
                  p: 2,
                  alignItems: 'center',
                }}
                key={itemRound.round}
              >
                <Typography variant="h6" fontWeight="bold">
                  {itemRound.round}
                </Typography>
                <Divider />

                <Stack
                  sx={{
                    my: 1,
                  }}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography>
                    Чистая прибыль
                  </Typography>
                  <Typography>
                    {itemRound.mainCostsField_ClearProfit}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography>
                    Денег на Расч/Счет
                  </Typography>
                  <Typography>
                    {itemRound.mainCostsField_MoneyFor}
                  </Typography>
                </Stack>
              </List>
            ))}
        </Box>
      </MuiDrawer>
    </div>
  );
}
