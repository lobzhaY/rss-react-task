import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderComponent from '../components/Header/HeaderComponent';
import FooterComponent from '../components/Footer/FooterComponent';

export default function Root() {
  return (
    <div>
      <HeaderComponent />
      <div className="container" data-testid="main">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
