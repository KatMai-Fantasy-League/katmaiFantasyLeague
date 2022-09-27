import React from 'react';
import NavBar from './NavBar';

function LayOut({ children }) {
  const divStyle = {
    background:
      'radial-gradient(circle, rgba(208,237,237,0.72) 0%, rgba(168,220,223,1) 80%, rgba(91,169,168,1) 100%)',
  };

  return (
    <div className='w-full' style={divStyle}>
      <NavBar />
      <div className='mx-auto w-7/12 h-screen bg-white'>
        <main>{children}</main>
      </div>
    </div>
  );
}
export default LayOut;
