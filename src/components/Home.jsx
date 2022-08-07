import React from 'react';
import { Link } from 'react-router-dom';

import Cards from './Cards';

function Home() {
  return (
    <main>
      <div>
        <Link to='#'>Log in</Link>
        <Link to='#'>Sign up</Link>
      </div>

      <header className='text-gray-800'>
        <h2 className='text-6xl font-semibold'>Recipes</h2>
        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
      </header>

      <div>
        <h4 className='font-bold'>Latest Recipes</h4>

        <div>
          <Cards />
        </div>

        <h4 className='font-bold'>Most Popular</h4>
        <div></div>

        <div>
          <div>Load more</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
