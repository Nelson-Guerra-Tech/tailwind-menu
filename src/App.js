import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
