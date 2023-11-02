'use client';

import {
  Box, Button, Dialog, DialogTitle, Grid, Stack, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './style.scss';
import MuiInputTextField from '@/components/atom/Input';
import inputList from '@/helpers/utils/inputs';
import styled from '@emotion/styled';
// import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '@/store';
import { setAllRoundsData, setEachPlayerData } from '@/store/user/slice';
import useAppSelector from '@/hooks/useAppSelector';
import RightMenuDrawer from '@/components/molecule/Drawer';
import getNumberWithSpaces from '@/helpers/utils/restyling';
import dependenceInputFields from './dependenceInputFields';

const FirstSection = () => {
  const [inputValue, setInputValue] = useState<any>({
    round: 0,
    firstFun_Shows: '',
    firstFun_CV1: '',
    firstFun_Applications: '',
    firstFun_CV2: '',
    firstFun_Sells: '',
    firstFun_MedBill: '',
    firstFun_OnceRevenue: '',
    firstFun_VariableCosts: '',
    firstFun_Profit: '',
    sellFunnel_01_Shows: '',
    sellFunnel_01_CV1: '',
    sellFunnel_01_Applications: '',
    sellFunnel_01_CV2: '',
    sellFunnel_01_Sells: '',
    sellFunnel_02_CV3: '',
    sellFunnel_02_ConstantClients: '',
    sellFunnel_02_TotalSells: '',
    sellFunnel_03_MedBill: '',
    sellFunnel_03_Revenue: '',
    variableCosts_Sells: '',
    variableCosts_Exec: '',
    variableCosts_Marketing: '',
    variableCosts_Taxes: '',
    variableCosts_TotalPercent: '',
    variableCosts_TotalCosts: '',
    constantCosts_FotOwner: '',
    constantCosts_Fot: '',
    constantCosts_CreditAll: '',
    constantCosts_CreditPay: '',
    constantCosts_TotalCosts: '',
    mainCostsField_Costs: '',
    mainCostsField_CoeffClearProfit: '',
    mainCostsField_ClearProfit: '',
    mainCostsField_MoneyFor: '',
    mainCostsField_PersonalCapital: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogValue, setDialogValue] = useState('');
  const [savedNotes, setSavedNotes] = useState<any>([]);

  const [dialogAmount, setDialogAmount] = useState('');
  const [dialogNote, setDialogNote] = useState('');

  const userDispatch = useAppDispatch();
  const allRoundsData = useAppSelector((state) => state.user.allRoundsData);
  // TODO - change func name without set
  const setStateHelper = (functionConst: string, value: string | number) => {
    const mainInfoCInputValue = {
      ...inputValue,
      [functionConst]: getNumberWithSpaces(value),
    };
    userDispatch(setEachPlayerData(mainInfoCInputValue));
    setInputValue((prev: any) => ({
      ...prev,
      [functionConst]: getNumberWithSpaces(value),
    }));
  };

  const getNormalNumber = (value: string | number) => Number(value.toString().replaceAll(' ', ''));

  const textFieldOnChange = (value: any, functionConst: string) => {
    setStateHelper(functionConst, value);

    const object = {
      ...inputValue,
      [functionConst]: value,
    };

    const totalCost = getNormalNumber(object.constantCosts_TotalCosts);
    const earnings = getNormalNumber(object.sellFunnel_03_Revenue);
    const sells = getNormalNumber(object.variableCosts_Sells);
    const taxes = getNormalNumber(object.variableCosts_Taxes);
    const obligations = getNormalNumber(object.variableCosts_Exec);
    const marketing = getNormalNumber(object.variableCosts_Marketing);
    const onceEarning = getNormalNumber(object.firstFun_OnceRevenue);
    const totalCosts = getNormalNumber(object.constantCosts_TotalCosts);
    const firstCv1 = getNormalNumber(object.firstFun_CV1);
    const firstCv2 = getNormalNumber(object.firstFun_CV2);
    const firstShows = getNormalNumber(object.sellFunnel_01_Shows);
    const applications = getNormalNumber(object.sellFunnel_01_Applications);
    const funnelSell = getNormalNumber(object.sellFunnel_01_Sells);
    const funnelCv3 = getNormalNumber(object.sellFunnel_02_CV3);

    if (dependenceInputFields.applications.includes(functionConst)) {
      setStateHelper(
        'firstFun_Applications',
        (getNormalNumber(object.firstFun_Shows) * getNormalNumber(firstCv1)) / 100,
      );
    }

    if (dependenceInputFields.oncePayment.includes(functionConst)) {
      setStateHelper(
        'firstFun_Sells',
        (getNormalNumber(object.firstFun_Applications) * getNormalNumber(firstCv2)) / 100,
      );

      setStateHelper(
        'firstFun_OnceRevenue',
        getNormalNumber(object.firstFun_Sells) * getNormalNumber(object.firstFun_MedBill),
      );
    }

    if (dependenceInputFields.sellsApplication.includes(functionConst)) {
      setStateHelper(
        'sellFunnel_01_Applications',
        (getNormalNumber(object.sellFunnel_01_CV1) * getNormalNumber(firstShows)) / 100,
      );
    }

    if (dependenceInputFields.sellsAmount.includes(functionConst)) {
      setStateHelper(
        'sellFunnel_01_Sells',
        (getNormalNumber(object.sellFunnel_01_CV2) * getNormalNumber(applications)) / 100,
      );
    }

    if (dependenceInputFields.clients.includes(functionConst)) {
      setStateHelper(
        'sellFunnel_02_ConstantClients',
        Math.round((getNormalNumber(funnelCv3) * getNormalNumber(funnelSell)) / 100),
      );
    }

    if (dependenceInputFields.earning.includes(functionConst)) {
      setStateHelper('sellFunnel_03_Revenue', getNormalNumber(object.sellFunnel_03_MedBill) * (getNormalNumber(object.sellFunnel_02_RegularPayClients) + getNormalNumber(object.sellFunnel_01_Sells) + getNormalNumber(object.sellFunnel_02_ConstantClients)));
    }

    if (dependenceInputFields.totalInProfit.includes(functionConst)) {
      const varCostsTotalPercent = sells + obligations + marketing + taxes;
      const varCostsTotalCosts = (varCostsTotalPercent * earnings) / 100;
      const firstFunVariableCosts = (varCostsTotalPercent * onceEarning) / 100;
      const mainCostsFieldClearProfit = earnings - (varCostsTotalCosts + totalCost);
      const firstFunProfit = onceEarning - firstFunVariableCosts;

      setStateHelper('variableCosts_TotalPercent', varCostsTotalPercent);
      setStateHelper('variableCosts_TotalCosts', varCostsTotalCosts);
      setStateHelper('mainCostsField_Costs', (varCostsTotalCosts + totalCosts));
      setStateHelper('mainCostsField_ClearProfit', mainCostsFieldClearProfit);
      setStateHelper('firstFun_VariableCosts', firstFunVariableCosts);
      setStateHelper('firstFun_Profit', firstFunProfit);

      setStateHelper('mainCostsField_MoneyFor', mainCostsFieldClearProfit + firstFunProfit);
    }

    if (dependenceInputFields.totalConst.includes(functionConst)) {
      const constantCostsCreditPay = getNormalNumber(object.constantCosts_CreditAll) / 10;
      setStateHelper('constantCosts_CreditPay', constantCostsCreditPay);
      setStateHelper('constantCosts_TotalCosts', getNormalNumber(object.constantCosts_FotOwner) + getNormalNumber(object.constantCosts_Fot) + constantCostsCreditPay);
    }
  };

  const endRound = () => {
    const allRoundsDataLocal = [...allRoundsData, {
      ...inputValue,
      round: inputValue.round + 1,
      date: new Date().toISOString(),
    }];

    window.localStorage.setItem('inputValue', JSON.stringify(inputValue));

    setInputValue((prev: any) => ({
      ...prev,
      round: inputValue.round + 1,
    }));

    const mainInfoCInputValue = {
      ...inputValue,
      round: inputValue.round + 1,
      date: new Date().toISOString(),
    };

    userDispatch(setEachPlayerData(mainInfoCInputValue));
    userDispatch(setAllRoundsData(allRoundsDataLocal));
  };

  useEffect(() => {
    const winLocal = window.localStorage.getItem('inputValue');
    const localStorageSavedNotes = window.localStorage.getItem('savedNotes');
    if (winLocal) {
      setInputValue(JSON.parse(winLocal as string));
    }
    if (localStorageSavedNotes) {
      setSavedNotes(JSON.parse(localStorageSavedNotes as string));
    }
  }, []);

  const InputTitleWrapper = styled('div')({
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  });

  const handleClose = () => {
    setOpenDialog(false);
  };

  const addValueTomainCostsFieldMoneyFor = (whatToDo: string) => {
    setOpenDialog(true);
    if (whatToDo === 'increase') {
      setDialogValue('Добавить');
    }

    if (whatToDo === 'decrease') {
      setDialogValue('Убавить');
    }
  };
  const saveNote = () => {
    const moneyFor = inputValue.mainCostsField_MoneyFor;
    const newSaveNote = savedNotes;
    let totalMoney = 0;

    const newSavedNoteValue = {
      date: new Date().toISOString(),
      amount: dialogAmount,
      note: dialogNote,
      whatHappened: dialogValue,
    };
    if (dialogValue === 'Убавить') {
      totalMoney = getNormalNumber(moneyFor) - getNormalNumber(dialogAmount);
    }
    if (dialogValue === 'Добавить') {
      totalMoney = getNormalNumber(moneyFor) + getNormalNumber(dialogAmount);
    }

    setStateHelper('mainCostsField_MoneyFor', totalMoney);

    newSaveNote.push(newSavedNoteValue);
    window.localStorage.setItem('savedNotes', JSON.stringify(newSaveNote));
    setSavedNotes(newSaveNote);
    handleClose();
  };

  const styleWithoutArrows = {
    my: 1,
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 2,
    },
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={3} item>
        <InputTitleWrapper>Разовая воронка</InputTitleWrapper>
        <Box sx={{
          border: '1px solid white',
          borderRadius: 2,
          p: 2,
        }}
        >
          {inputList.firstFunnel.map((item) => (
            <MuiInputTextField
              key={item.label}
              sx={styleWithoutArrows}
              disabled={item.disabled}
              value={inputValue[item.functionConst]}
              label={item.label}
              onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
            />
          ))}
        </Box>
      </Grid>

      <Grid xs={3} item>
        <InputTitleWrapper>Воронка продаж</InputTitleWrapper>
        {inputList.sellFunnel_01.map((item) => (
          <MuiInputTextField
            key={item.label}
            sx={styleWithoutArrows}
            disabled={item.disabled}
            label={item.label}
            value={inputValue[item.functionConst]}
            onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
          />
        ))}

        {inputList.sellFunnel_02.map((item) => (
          <MuiInputTextField
            sx={styleWithoutArrows}
            key={item.label}
            disabled={item.disabled}
            label={item.label}
            value={inputValue[item.functionConst]}
            onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
          />
        ))}

        {inputList.sellFunnel_03.map((item) => (
          <MuiInputTextField
            sx={styleWithoutArrows}
            key={item.label}
            label={item.label}
            disabled={item.disabled}
            value={inputValue[item.functionConst]}
            onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
          />
        ))}
      </Grid>

      <Grid
        xs={3}
        item
      >
        <InputTitleWrapper>Переменные расходы</InputTitleWrapper>
        {inputList.variableCosts.map((item) => (
          <MuiInputTextField
            sx={styleWithoutArrows}
            key={item.label}
            disabled={item.disabled}
            label={item.label}
            value={inputValue[item.functionConst]}
            onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
          />
        ))}
        <hr />
        <Grid
          xs={12}
          item
        >
          {inputList.mainCostsField.map((item) => (
            <MuiInputTextField
              sx={styleWithoutArrows}
              key={item.label}
              label={item.label}
              disabled={item.disabled}
              value={inputValue[item.functionConst]}
              onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
            />
          ))}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              sx={{
                fontSize: 10,
              }}
              size="small"
              onClick={() => addValueTomainCostsFieldMoneyFor('increase')}
              variant="contained"
            >
              Добавить

            </Button>
            <RightMenuDrawer
              setInputValue={setInputValue}
              setSavedNotes={setSavedNotes}
              savedNotes={savedNotes}
            />
            <Button
              sx={{
                fontSize: 10,
              }}
              onClick={() => addValueTomainCostsFieldMoneyFor('decrease')}
              variant="contained"
            >
              Убавить
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        xs={3}
        item
      >
        <InputTitleWrapper>Постоянные расходы</InputTitleWrapper>
        {inputList.constantCosts.map((item) => (
          <MuiInputTextField
            sx={styleWithoutArrows}
            key={item.label}
            label={item.label}
            disabled={item.disabled}
            value={inputValue[item.functionConst]}
            onChange={(e) => textFieldOnChange(e.target.value, item.functionConst)}
          />
        ))}
      </Grid>

      <Button
        variant="contained"
        onClick={endRound}
        fullWidth
        sx={{
          my: 4,
        }}
      >
        Завершить ход
      </Button>
      <Dialog onClose={handleClose} open={openDialog}>
        <Box sx={{
          p: 4,
        }}
        >

          <DialogTitle>
            {dialogValue}
            {' '}
            к расчетному счету
          </DialogTitle>
          <TextField
            onChange={(e) => setDialogAmount(e.target.value)}
            value={dialogAmount}
            type="number"
            label="Количество"
            fullWidth
            autoFocus
            variant="outlined"
            sx={{
              '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                display: 'none',
              },
            }}
          />
          <TextField
            onChange={(e) => setDialogNote(e.target.value)}
            value={dialogNote}
            label="Заметка кому и на что"
            fullWidth
            autoFocus
            variant="outlined"
            sx={{
              my: 2,
            }}
          />

          <Button onClick={saveNote} variant="contained">{dialogValue}</Button>
        </Box>
      </Dialog>
    </Grid>
  );
};

export default FirstSection;
