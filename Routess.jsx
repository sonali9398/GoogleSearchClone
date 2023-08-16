import React from 'react';
import {  Navigate} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import {Results} from './Results';

export const Routess = () => {
  return (
    <div className='p-4'>
        <Routes>
          <>
            <Route exact path="/">
              <Navigate to="/search" />
            </Route>
            <Route exact path="/search">
              <Results />
            </Route>
            <Route path="/images">
              <Results />
            </Route>
            <Route path="/news">
              <Results />
            </Route>
            <Route path="/videos">
              <Results />
            </Route>
          </>
          
        </Routes>
    </div>
  )
}

export default Routess;