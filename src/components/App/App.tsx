import React, { useState, useEffect } from 'react';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import Promocode from '../Main/Promocode/Promocode.tsx';
import * as Api from '../../utils/utils';

const AppRouter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isSuccessfull: false,
    customMessage: '',
  });

  // Логика InfoTooltip
  const toggleVisibility = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false); // Скрываем окно через 3 секунды
    }, 3000);
  };

  function handleInfoTooltip(effect: boolean, customMessage: string) {
    setIsInfoTooltip((prevState) => ({
      ...prevState,
      isSuccessfull: effect,
      customMessage: customMessage,
    }));
    toggleVisibility();
  }
  console.log('handleInfoTooltip: ', handleInfoTooltip);

  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);

  useEffect(() => {
    Api.getDataAmbassador()
      .then((data) => {
        console.log(data);
        setAmbassadors(data.results);
        console.log('getDataAmbassador: ', data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className='main'>
      <Router>
        <Sidebar />
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/data-ambassador'
            element={<DataAmbassador ambassadors={ambassadors} />}
          />
          <Route path='/promocode' element={<Promocode />} />
          <Route path='/content' Component={Content} />
          <Route path='/program' Component={Program} />
          <Route path='/budjet' Component={Budjet} />
          <Route path='/sending' Component={Sending} />
          <Route path='/notice' Component={Notice} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
      <InfoTooltip
        isVisible={isVisible}
        isSuccessfull={isInfoTooltip.isSuccessfull}
        customMessage={isInfoTooltip.customMessage}
      />
    </main>
  );
};

export default AppRouter;
