import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1 className='font-bold uppercase'>
              <Link to='/'>Food Ninja</Link>
            </h1>
          </div>

          <ul>
            <li className='text-gray-800 font-bold'>
              <Link to='/'>
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <span>About</span>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
