'use client';

// import getNumberWithSpaces from '@/helpers/utils/restyling';
import useAppSelector from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/store';
import { setHeaderMainPlayerData } from '@/store/header';
import {
  Box, TextField, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
// import useWindowSize from '@/hooks/useWindowSize';

const Header = () => {
  const [gameMainValues, setGameMainValues] = useState({
    name: '',
    bussiness: '',
    gamePlan: '',
    gameRequest: '',

  });
  const dispatch = useAppDispatch();
  const playerEachRoundData = useAppSelector((state) => state.user.data);

  const handleOnChange = (value: any, gameValue: string) => {
    // TODO - check this function - maybe can change to dispatch and get values from there
    setGameMainValues((prev: any) => ({
      ...prev,
      [gameValue]: value.target.value,
    }));

    dispatch(setHeaderMainPlayerData({
      ...gameMainValues,
      [gameValue]: value.target.value,
    }));
    window.localStorage.setItem('gameMainValues', JSON.stringify({
      ...gameMainValues,
      [gameValue]: value.target.value,
    }));
  };

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('gameMainValues') as string);
    if (data) {
      setGameMainValues(data);
    }
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      m: 'auto',
      p: 4,
      gap: 4,
    }}
    >
      <Typography variant="h5">22Game.ru</Typography>

      <TextField
        label="Имя"
        value={gameMainValues.name}
        onChange={(e: any) => handleOnChange(e, 'name')}
      />
      <TextField
        label="Бизнес"
        value={gameMainValues.bussiness}
        onChange={(e: any) => handleOnChange(e, 'bussiness')}
      />
      <TextField
        label="Цель на игру"
        value={gameMainValues.gamePlan}
        onChange={(e: any) => handleOnChange(e, 'gamePlan')}
      />
      <TextField
        label="Запрос на игру"
        value={gameMainValues.gameRequest}
        onChange={(e: any) => handleOnChange(e, 'gameRequest')}
      />
      <Typography sx={{
        whiteSpace: 'nowrap',
      }}
      >
        Ход №
        {' '}
        {playerEachRoundData.round}
      </Typography>
    </Box>
  );
};
export default Header;
