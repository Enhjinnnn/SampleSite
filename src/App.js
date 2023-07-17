import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Portfolio from './Components/Portfolio';
import AboutUs from './Components/AboutUs';
import ContactUS from './Components/ContactUS';
import Footer from './Components/Footer';
import ProjectCharacter from './ProjectCharacter';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <NavLink activeClassName='active' to='/'> <Navbar/> </NavLink>
      <Header/>
      <NavLink activeClassName='active' to='/project'><Projects/></NavLink>
      <Portfolio/>
      <AboutUs/>
      <ContactUS/>  
      <Footer/>
    </div>

    <Switch>
      <Route path="/project" component={ProjectCharacter}/>
    </Switch>
    </Router>
  )
}

export default App
