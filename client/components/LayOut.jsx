import React from 'react';
import NavBar from './NavBar';

function LayOut({ children }) {
  return (
    <div className='w-full h-screen'>
      <NavBar />
      <div className='mx-auto w-8/12 h-screen bg-light-cyan-100'>
        <main>{children}</main>
      </div>
    </div>
  );
}
export default LayOut;
