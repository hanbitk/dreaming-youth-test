import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailContent from '../components/DetailContent/DetailContent';
import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/detail' element={<DetailContent />} />
          <Route path='/detail2' element={<DetailContent />} />
          <Route path='/detail3' element={<DetailContent />} />
          <Route path='/detail4' element={<DetailContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
