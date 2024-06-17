import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.sass'

import Header from './components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Error404 from 'pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
