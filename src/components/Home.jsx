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

      <header>
        <h2>Recipes</h2>
        <h3>For Ninjas</h3>
      </header>

      <div>
        <h4>Latest Recipes</h4>

        <div>
          <Cards />
        </div>

        <h4>Most Popular</h4>
        <div></div>

        <div>
          <div>Load more</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
