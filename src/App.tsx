import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import Root from './pages/Root';
import FormsPage from './pages/Forms/Forms';

export default function App() {
  return (
    <div className="app" data-testid="app-component">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/forms" element={<FormsPage />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}
