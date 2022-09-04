import React from 'react'
import styles from './styles';
import { Navbar, Footer } from './components';


const App = () => {
  return (
    <>
      <Navbar />
      <div className='bg-indigo-600 w-full h-screen' />
      <Footer />
    </>
  )
};

export default App