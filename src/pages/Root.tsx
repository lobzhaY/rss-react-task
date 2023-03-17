import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/Header/HeaderComponent';
import FooterComponent from '../components/Footer/FooterComponent';
import './Root.module.scss';

class Root extends React.Component {
  render() {
    return (
      <div className='margin-container'>
        <HeaderComponent />
        <div className="container">
          <Outlet />
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default Root;
