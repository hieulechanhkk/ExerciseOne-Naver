import React from 'react';
import './stylesheet/responsive.css'
import './stylesheet/style.css'
import Logo from './logo.png'
import { IoMdMenu } from 'react-icons/io'
import Home from './components/Home';
import Content from './components/Content';
import Download from './components/Download';
import Footer from './components/Footer';
import Aos from 'aos';

function App(props) {
  Aos.init();
  return (
    <div className='App'>
      <div className='nav-bar'>
        <img src={Logo}></img>
        <div className='nav-bar--desktop'>
          <a href='#home'>Home</a>
          <a href='#'>Product</a>
          <a href='#'>Faq</a>
          <a href='#'>Contact</a>
        </div>
        <IoMdMenu className='nav-bar--menu'></IoMdMenu>
      </div>
      {/* Home Page */}
      <Home></Home>
      <div className='underline'></div>
      {/* Regist a account */}
      <Content></Content>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}

export default App;