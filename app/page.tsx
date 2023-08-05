import React from 'react';
import Header from '@/components/organism/Header';
// import HeaderWrapper from '@/helpers/styledWrapers/pageWrappers';
import HomePage from '../pages/home';

export default function Home() {
  return (
    <main>
      {/* <HeaderWrapper> */}
      <Header />
      {/* </HeaderWrapper> */}
      <HomePage />
    </main>
  );
}
