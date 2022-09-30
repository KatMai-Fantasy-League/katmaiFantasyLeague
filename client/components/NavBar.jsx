import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({ children }) {
  return (
    <li className='block px-3 text-white rounded hover:underline hover:bg-transparent border-0 p-0'>
      {children}
    </li>
  );
}

function NavBar() {
  return (
    <div className='border-b-2 border-gray-500'>
      <nav className='border-gray-200 px-2 py-2.5 bg-blue-sapphire-100'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <ul className='flex flex-row p-3 mt-4 space-x-8 mt-0 text-lg font-medium border-0 lg:text-sm'>
            <NavLink>
              <Link to='/'>Sign In/Sign Up</Link>
            </NavLink>
            <NavLink>
              <Link to='/home'>Home</Link>
            </NavLink>
            <NavLink>
              <Link to='/myBracket'>My Bracket</Link>
            </NavLink>
            <NavLink>
              <Link to='/currentBracket'>Current Bracket</Link>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
