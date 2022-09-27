import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({ children }) {
  return (
    <li className='block px-3 text-gray-400 rounded hover:bg-gray-100 hover:text-white hover:bg-transparent border-0 p-0'>
      {children}
    </li>
  );
}

function NavBar() {
  return (
    <div>
      <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 bg-blue-sapphire-100'>
        <div class='container flex flex-wrap justify-between items-center mx-auto'>
          <ul class='flex flex-row p-3 mt-4 space-x-8 mt-0 text-sm font-medium border-0'>
            <NavLink>
              <Link to='/'>Sign In/Sign Up</Link>
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
