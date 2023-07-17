import React from 'react';

import { setTestData } from '@/store/user/slice';
import { useDispatch, useSelector } from 'react-redux';

function TestPage() {
  const counter = useSelector((state: any) => state.user.data);
  const dispatch = useDispatch();

  const checkSome = () => {
    // console.log(counter);
  };

  const DispatchMe = () => {
    dispatch(setTestData('asd'));
    // console.log(counter);
  };

  return (
    <>
      {counter}
      <button type="button" onClick={checkSome}>showMeStoreData</button>
      <button type="button" onClick={DispatchMe}>DispatchMe</button>
    </>
  );
}
export default TestPage;
