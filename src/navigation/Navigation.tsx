import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Add from '../pages/Add';
import Home from '../pages/Home';
import Cards from '../pages/Cards';
import Signin from '../pages/Signin';
import Transactions from '../pages/Transactions';

const Navigation = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/add' element={<Add />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cards' element={<Cards />} />
      <Route path='/transactions' element={<Transactions />} />
    </Routes>
  );
};

export default Navigation;
