const inputList = {
  firstFunnel: [
    {
      label: 'Показы',
      functionConst: 'firstFun_Shows',
      disabled: false,
    },
    {
      label: 'CV1',
      functionConst: 'firstFun_CV1',
      disabled: false,
    },
    {
      label: 'Заявки',
      functionConst: 'firstFun_Applications',
      disabled: true,
    },
    {
      label: 'CV2',
      functionConst: 'firstFun_CV2',
      disabled: false,
    },
    {
      label: 'Продажи',
      functionConst: 'firstFun_Sells',
      disabled: true,
    },
    {
      label: 'Средний чек',
      functionConst: 'firstFun_MedBill',
      disabled: false,
    },
    {
      label: 'Разовая выручка',
      functionConst: 'firstFun_OnceRevenue',
      disabled: true,
    },
    {
      label: 'Переменные расходы',
      functionConst: 'firstFun_VariableCosts',
      disabled: true,
    },
    {
      label: 'Прибыль',
      functionConst: 'firstFun_Profit',
      disabled: true,
    },
  ],
  sellFunnel_01: [
    {
      label: 'Показы',
      functionConst: 'sellFunnel_01_Shows',
      disabled: false,
    },
    {
      label: 'CV1',
      functionConst: 'sellFunnel_01_CV1',
      disabled: false,
    },
    {
      label: 'Заявки',
      functionConst: 'sellFunnel_01_Applications',
      disabled: true,
    },
    {
      label: 'CV2',
      functionConst: 'sellFunnel_01_CV2',
      disabled: false,
    },
    {
      label: 'Продажи (шт)',
      functionConst: 'sellFunnel_01_Sells',
      disabled: true,
    },
  ],
  sellFunnel_02: [
    {
      label: 'CV3',
      functionConst: 'sellFunnel_02_CV3',
      disabled: false,
    },
    {
      label: 'Постоянные клиенты (шт)',
      functionConst: 'sellFunnel_02_ConstantClients',
      disabled: true,
    },
    {
      label: 'Клиенты платят регулярно',
      functionConst: 'sellFunnel_02_RegularPayClients',
      disabled: false,
    },
    // {
    //   label: 'Всего продаж (шт)',
    //   functionConst: 'sellFunnel_02_TotalSells',
    //   disabled: false,
    // },
  ],
  sellFunnel_03: [
    {
      label: 'Средний чек',
      functionConst: 'sellFunnel_03_MedBill',
      disabled: false,
    },
    {
      label: 'Выручка (продажи и их средний чек)',
      functionConst: 'sellFunnel_03_Revenue',
      disabled: true,
    },
  ],
  variableCosts: [
    {
      label: 'Продажи',
      functionConst: 'variableCosts_Sells',
      disabled: false,
    },
    {
      label: 'Исполнение обязательств',
      functionConst: 'variableCosts_Exec',
      disabled: false,
    },
    {
      label: 'Маркетинг',
      functionConst: 'variableCosts_Marketing',
      disabled: false,
    },
    {
      label: 'Налоги',
      functionConst: 'variableCosts_Taxes',
      disabled: false,
    },
    {
      label: 'Итого % от выручки',
      functionConst: 'variableCosts_TotalPercent',
      disabled: true,
    },
    {
      label: 'Итого переменные',
      functionConst: 'variableCosts_TotalCosts',
      disabled: true,
    },
  ],
  constantCosts: [
    {
      label: 'Фот собственника',
      functionConst: 'constantCosts_FotOwner',
      disabled: false,
    },
    {
      label: 'Фот',
      functionConst: 'constantCosts_Fot',
      disabled: false,
    },
    {
      label: 'Кредит всего',
      functionConst: 'constantCosts_CreditAll',
      disabled: false,
    },
    {
      label: 'Кредит платеж',
      functionConst: 'constantCosts_CreditPay',
      disabled: true,
    },
    {
      label: 'Итого постоянный',
      functionConst: 'constantCosts_TotalCosts',
      disabled: true,
    },
  ],
  mainCostsField: [
    {
      label: 'Расходы',
      functionConst: 'mainCostsField_Costs',
      disabled: true,
    },
    {
      label: 'Коэфф ЧП',
      functionConst: 'mainCostsField_CoeffClearProfit',
      disabled: false,
    },
    {
      label: 'Чистая прибыль',
      functionConst: 'mainCostsField_ClearProfit',
      disabled: true,
    },
    {
      label: 'Денег на Расч/Счет',
      functionConst: 'mainCostsField_MoneyFor',
      disabled: true,
    },
    // {
    //   label: 'Личный капитал',
    //   functionConst: 'mainCostsField_PersonalCapital',
    //   disabled: false,
    // },
  ],
};
export default inputList;
