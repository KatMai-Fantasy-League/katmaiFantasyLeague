import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/app.css';

import LoginPage from './components/LoginPage';
// import NavBar from './components/NavBar';
import LayOut from './components/LayOut';

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/myBracket' element={<LoginPage />}></Route>
          <Route path='/currentBracket' element={<LoginPage />}></Route>
        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}
export default App;
