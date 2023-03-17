import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="margin-container">
          <div className="header-container__header-info">
            <div className="header-info">
              <span className="material-symbols-outlined header-info-icon">call</span>
              <div className="header-info__call-info">
                <div className="call-info__phone">8(829)650&#x2012;40&#x2012;06</div>
                <div className="call-info__work">We work 7 days a week</div>
                <div className="call-info__time">9:00&mdash;18:00</div>
              </div>
            </div>
            <div className="header-login">
              <span className="material-symbols-outlined header-info-icon">login</span>
              <div className="header-login__entry">Sign in</div>
              <div className="header-login__exit">Registration</div>
            </div>
          </div>
        </div>
        <div className="header-container__header-nav">
          <div className="margin-container">
            <div className="header-nav__logo">
              <Link to="/" className='header-nav__logo-container'>
                <img src={logo} alt="OJJO" />
              </Link>
            </div>
            <nav className="header-nav__navigation">
              <ul className="navigation">
                <li className="navigation__item">
                  <Link to="/aboutUs" className='navigation__item-link'>About us</Link>
                </li>
                <li className="navigation__item">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </li>
              </ul>
              <span className="material-symbols-outlined">search</span>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
