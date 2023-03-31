import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function HeaderComponent() {
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
            <Link to="/" className="header-nav__logo-container">
              <img src={logo} alt="OJJO" />
            </Link>
          </div>
          <nav className="header-nav__navigation">
            <ul className="navigation">
              <li className="navigation__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `navigation__item-link-active` : 'navigation__item-link'
                  }
                >
                  Main page
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? `navigation__item-link-active` : 'navigation__item-link'
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  data-testid="forms-route"
                  to="/forms"
                  className={({ isActive }) =>
                    isActive ? `navigation__item-link-active` : 'navigation__item-link'
                  }
                >
                  Forms
                </NavLink>
              </li>
              <li className="navigation__item item-cursor">
                <span className="material-symbols-outlined">shopping_cart</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
