import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Portfolio from './Components/Portfolio';
import AboutUs from './Components/AboutUs';
import ContactUS from './Components/ContactUS';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Projects/>
      <Portfolio/>
      <AboutUs/>
      <ContactUS/>
    </div>
  )
}

export default App
