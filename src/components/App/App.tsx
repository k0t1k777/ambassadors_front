import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Sidebar from '../Main/Sidebar/Sidebar';
import DataAmbassador from '../Main/DataAmbassador/DataAmbassador';
import Content from '../Main/Content/Content';
import { ContentProp } from '../../types/types';
import Promocode from '../Main/Promocode/Promocode';
import Register from '../Register/Register';
import Program from '../Main/Program/Program';
import Budjet from '../Main/Budjet/Budjet';
import Sending from '../Main/Sending/Sending';
import Notice from '../Main/Notice/Notice';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import { BudjetMerch } from '../Main/Budjet/Budjet';
import { SendingMerch } from '../Main/Sending/Sending';
import { ProgramLoyality } from '../Main/Program/Program';
import { Notification } from '../Main/Notice/Notice';
import * as Api from '../../utils/utils';

const AppRouter: React.FC = () => {
  // const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [sending, setSending] = useState<SendingMerch[]>([]);
  const [program, setProgram] = useState<ProgramLoyality[]>([]);
  const [notice, setNotice] = useState<Notification[]>([]);
  const [noticeCount, setNoticeCount] = useState("");
  console.log('notice: ', notice);
  const [sum, setSum] = useState("")
  const [budjet, setBudjet] = useState<BudjetMerch[]>([]);
  const [cards, setCards] = useState<ContentProp>({
    new: [],
    in_progress: [],
    done: [],
  });
  const [isInfoTooltip, setIsInfoTooltip] = useState({
    isSuccessfull: false,
    customMessage: '',
  });

  // const [loggedIn, setLoggedIn] = useState<boolean>(() => {
  //   return localStorage.getItem('loggedIn') === 'true';
  // });
  // const [user, setUser] = useState<{ email: string; password: string } | null>(
  //   null
  // );

  // const handleLogin = (email: string, password: string) => {
  //   setLoggedIn(true);
  //   setUser({ email, password });
  //   localStorage.setItem('loggedIn', 'true');
  //   console.log('login');
  //   navigate('/data-ambassador', { replace: true });
  // };

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

  useEffect(() => {
    Api.getDataSending()
      .then((data) => {
        // console.log(data);
        setSending(data.results);
        // console.log('getDataSending: ', data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getProgram()
      .then((data) => {
        console.log(data);
        setProgram(data.results);
        console.log('setProgram: ', data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getNotifications()
      .then((data) => {
        console.log(data);
        setNoticeCount(data.count);
        setNotice(data.results);
        console.log('setNotice: ', data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getBudjet()
      .then((data) => {
        setBudjet(data.results.data);
        setSum(data.results.grand_total)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    Api.getContent()
      .then((data) => {
        setCards(data);
        console.log('Content:', data);
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
    <main className='main'>
      <Header noticeCount={noticeCount} />
      <Sidebar />
      <Routes>
        {/* <Route path='/login' element={<Login onLogin={handleLogin} />} /> */}
        <Route
          path='/data-ambassador'
          element={<DataAmbassador ambassadors={ambassadors} />}
        />
        <Route path='/promocode' element={<Promocode />} />
        <Route path='/content' element={<Content cards={cards} />} />
        <Route path='/program' element={<Program program={program}/>} />
        <Route path='/budjet' element={<Budjet budjet={budjet} sum={sum} />} />
        <Route path='/sending' element={<Sending sending={sending} />} />
        <Route path='/notice' element={<Notice notice={notice}/>} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <InfoTooltip
        isVisible={isVisible}
        isSuccessfull={isInfoTooltip.isSuccessfull}
        customMessage={isInfoTooltip.customMessage}
      />
    </main>
  );
};
export default AppRouter;
