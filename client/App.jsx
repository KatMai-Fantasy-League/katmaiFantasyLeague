import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/app.css';

import LayOut from './components/LayOut';

import LoginPage from './components/pages/LoginPage';
import MyBracket from './components/pages/MyBracket';
import CurrentBracket from './components/pages/CurrentBracket';

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/myBracket' element={<MyBracket />}></Route>
          <Route path='/currentBracket' element={<CurrentBracket />}></Route>
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}
export default App;
