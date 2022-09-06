import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-indigo-600 w-full h-screen' />
      <Footer />
    </div>
  )
};

export default App;