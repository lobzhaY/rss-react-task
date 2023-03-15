import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import Root from './pages/Root';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<MainPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/notFount" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
