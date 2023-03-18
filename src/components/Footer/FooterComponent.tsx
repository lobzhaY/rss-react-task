import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './FooterComponent.module.scss';

class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="margin-container">
          <div className="wrapper">
            <div className="footer__nav">
              <ul>
                <li>
                  <Link to="/" className="nav-link">
                    Main
                  </Link>
                </li>
                <li>
                  <Link to="aboutUs" className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__contact">
              <div className="contact__item">
                <Link to="/" className="footer-logo-container flex-item-start">
                  <img src={logo} alt="OJJO" className="footer-logo" />
                </Link>
              </div>
              <div className="contact__item flex-item">
                <Link to={`https://rs.school/`} className="footer-logo-container flex-item">
                  <svg
                    viewBox="0 0 52 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="footer-logo footer-svg"
                  >
                    <path
                      className="footer-logo"
                      d="M0.25 36V1.09091H15.3182C17.9091 1.09091 20.1761 1.5625 22.1193 2.50568C24.0625 3.44886 25.5739 4.80682 26.6534 6.57955C27.733 8.35227 28.2727 10.4773 28.2727 12.9545C28.2727 15.4545 27.7159 17.5625 26.6023 19.2784C25.5 20.9943 23.9489 22.2898 21.9489 23.1648C19.9602 24.0398 17.6364 24.4773 14.9773 24.4773H5.97727V17.1136H13.0682C14.1818 17.1136 15.1307 16.9773 15.9148 16.7045C16.7102 16.4205 17.3182 15.9716 17.7386 15.358C18.1705 14.7443 18.3864 13.9432 18.3864 12.9545C18.3864 11.9545 18.1705 11.142 17.7386 10.517C17.3182 9.88068 16.7102 9.41477 15.9148 9.11932C15.1307 8.8125 14.1818 8.65909 13.0682 8.65909H9.72727V36H0.25ZM20.7045 19.9773L29.4318 36H19.1364L10.6136 19.9773H20.7045ZM41.5307 12C41.4398 10.8636 41.0136 9.97727 40.2523 9.34091C39.5023 8.70454 38.3602 8.38636 36.8261 8.38636C35.8489 8.38636 35.0477 8.50568 34.4227 8.74432C33.8091 8.97159 33.3545 9.28409 33.0591 9.68182C32.7636 10.0795 32.6102 10.5341 32.5989 11.0455C32.5761 11.4659 32.65 11.8466 32.8205 12.1875C33.0023 12.517 33.2864 12.8182 33.6727 13.0909C34.0591 13.3523 34.5534 13.5909 35.1557 13.8068C35.758 14.0227 36.4739 14.2159 37.3034 14.3864L40.167 15C42.0989 15.4091 43.7523 15.9489 45.1273 16.6193C46.5023 17.2898 47.6273 18.0795 48.5023 18.9886C49.3773 19.8864 50.0193 20.8977 50.4284 22.0227C50.8489 23.1477 51.0648 24.375 51.0761 25.7045C51.0648 28 50.4909 29.9432 49.3545 31.5341C48.2182 33.125 46.5932 34.3352 44.4795 35.1648C42.3773 35.9943 39.8489 36.4091 36.8943 36.4091C33.8602 36.4091 31.2125 35.9602 28.9511 35.0625C26.7011 34.1648 24.9511 32.7841 23.7011 30.9205C22.4625 29.0455 21.8375 26.6477 21.8261 23.7273H30.8261C30.883 24.7955 31.15 25.6932 31.6273 26.4205C32.1045 27.1477 32.775 27.6989 33.6386 28.0739C34.5136 28.4489 35.5534 28.6364 36.758 28.6364C37.7693 28.6364 38.6159 28.5114 39.2977 28.2614C39.9795 28.0114 40.4966 27.6648 40.8489 27.2216C41.2011 26.7784 41.383 26.2727 41.3943 25.7045C41.383 25.1705 41.2068 24.7045 40.8659 24.3068C40.5364 23.8977 39.9909 23.5341 39.2295 23.2159C38.4682 22.8864 37.4398 22.5795 36.1443 22.2955L32.667 21.5455C29.5761 20.875 27.1386 19.7557 25.3545 18.1875C23.5818 16.608 22.7011 14.4545 22.7125 11.7273C22.7011 9.51136 23.292 7.57386 24.4852 5.91477C25.6898 4.24432 27.3545 2.94318 29.4795 2.01136C31.6159 1.07954 34.0648 0.613635 36.8261 0.613635C39.6443 0.613635 42.0818 1.08523 44.1386 2.02841C46.1955 2.97159 47.7807 4.30114 48.8943 6.01705C50.0193 7.72159 50.5875 9.71591 50.5989 12H41.5307Z"
                      fill="#C5C5C5"
                    />
                  </svg>
                </Link>
              </div>
              <div className="contact__item flex-item-end">
                <Link to={`https://github.com/lobzhay`} className="nav-link">
                  lobzhaY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
