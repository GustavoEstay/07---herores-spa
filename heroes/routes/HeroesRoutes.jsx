import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../src/ui';
import { DCPage, HeroPage, MarvelPage, SearchParge } from '../Pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/marvel' element={<MarvelPage />} />
          <Route path='/dc' element={<DCPage />} />

          <Route path='/search' element={<SearchParge />} />
          <Route path='/hero/:id' element={<HeroPage />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
