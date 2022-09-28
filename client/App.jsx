import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './stylesheets/app.css';

import LayOut from './components/LayOut';
import LoginPage from './components/pages/LoginPage';
import Home from './components/pages/Home';
import MyBracket from './components/pages/MyBracket';
import CurrentBracket from './components/pages/CurrentBracket';
import { convertFromSQL } from './utils/sqlConvertFrom';

const initialState = [
  {
    title: 'Round one',
    seeds: [
      { id: 'r0p0', date: new Date().toDateString(), teams: [{}, {}] },
      { id: 'r0p1', date: new Date().toDateString(), teams: [{}, {}] },
      { id: 'r0p2', date: new Date().toDateString(), teams: [{}, {}] },
      { id: 'r0p3', date: new Date().toDateString(), teams: [{}, {}] },
    ],
  },
  {
    title: 'Round two',
    seeds: [
      { id: 'r1p0', date: new Date().toDateString(), teams: [{}, {}] },
      { id: 'r1p1', date: new Date().toDateString(), teams: [{}, {}] },
    ],
  },
  {
    title: 'Finals',
    seeds: [{ id: 'r2p0', date: new Date().toDateString(), teams: [{}, {}] }],
  },
  {
    title: 'Winner',
    seeds: [{ id: 'r3p0', date: new Date().toDateString(), teams: [{}] }],
  },
];

function App() {
  const [myBracket, setMyBracket] = useState(initialState);
  const [resultsBracket, setResultsBracket] = useState(initialState);

  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route
            path='/myBracket'
            element={
              <MyBracket myBracket={myBracket} setMyBracket={setMyBracket} />
            }
          ></Route>
          <Route
            path='/currentBracket'
            element={
              <CurrentBracket
                resultsBracket={resultsBracket}
                setResultsBracket={setResultsBracket}
              />
            }
          ></Route>
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}
export default App;
