import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <div className='bg-indigo-600 w-full h-screen' /> */}
      <Hero />
      <Footer />
    </div>
  )
};

export default App;