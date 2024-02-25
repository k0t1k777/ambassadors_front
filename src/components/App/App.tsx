import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Sidebar from '../Main/Sidebar/Sidebar';
import Header from '../Header/Header';
import DataAmbassador from '../Main/DataAmbassador/DataAmbassador';
import Content from '../Main/Content/Content';
import Register from '../Register/Register';
import Program from '../Main/Program/Program';
import Budjet from '../Main/Budjet/Budjet';
import Sending from '../Main/Sending/Sending';
import Notice from '../Main/Notice/Notice';

const AppRouter: React.FC = () => {
  return (
    <main className='main'>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/data-ambassador' element={<DataAmbassador />} />
          <Route path='/content' Component={Content} />
          <Route path='/program' Component={Program} />
          <Route path='/budjet' Component={Budjet} />
          <Route path='/sending' Component={Sending} />
          <Route path='/notice' Component={Notice} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
