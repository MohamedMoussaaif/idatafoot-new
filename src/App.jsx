import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import RoutesConfig from './routes/RoutesConfig';
import Footer from './components/footer/Footer';

function App() {
  const [navClick, setNavClick] = useState(true);

  return (
    <div className='flex flex-col min-h-screen bg-black relative'>
      <div className='pb-10 z-10'>
        <Navbar setNavClick={setNavClick}/>
      </div>
      <div className='flex-grow mt-10 md:mt-20 lg:mt-10'>
        <RoutesConfig navClick={navClick}/>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
