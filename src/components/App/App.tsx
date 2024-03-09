import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import { BudjetMerch } from '../Main/Budjet/Budjet';
import { SendingMerch } from '../Main/Sending/Sending';
import { ProgramLoyality } from '../Main/Program/Program';
import { Notification } from '../Main/Notice/Notice';
import * as Api from '../../utils/utils';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const AppRouter: React.FC = () => {
  const navigate = useNavigate();
  const [ambassadors, setAmbassadors] = useState<Ambassador[]>([]);
  const [sending, setSending] = useState<SendingMerch[]>([]);
  const [program, setProgram] = useState<ProgramLoyality[]>([]);
  const [notice, setNotice] = useState<Notification[]>([]);
  const [unseenCount, setUnseenCount] = useState('');
  const [sum, setSum] = useState('');
  const [promocodes, setPromocodes] = useState<any>([]);
  const [promocodesArchive, setPromocodesArchive] = useState<any>([]);
  // const [notifications, setNotifications] = useState([]);

  const [budjet, setBudjet] = useState<BudjetMerch[]>([]);
  // const [budjetDownload, setBudjetDownload] = useState([]);
  const [cards, setCards] = useState<ContentProp>({
    new: [],
    in_progress: [],
    done: [],
  });

  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('loggedIn') === 'true';
  });
  // const [user, setUser] = useState<{ email: string; password: string } | null>(
  //   null
  // );
  const handleLogin = () => {
    setLoggedIn(true);
    // setUser({ email, password });
    localStorage.setItem('loggedIn', 'true');
    console.log('login');
    navigate('/data-ambassador', { replace: true });
  };

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
        setSending(data.results);
        console.log('getDataSending: ', data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getProgram()
      .then((data) => {
        setProgram(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getNotifications()
      .then((data) => {
        setNotice(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getNotificationsUnseen()
      .then((data) => {
        setUnseenCount(data['unseen']);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getBudjet()
      .then((data) => {
        setBudjet(data.results.data);
        setSum(data.results.grand_total);
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

  useEffect(() => {
    Api.getDataPromocodes().then((res) => setPromocodes(res.results));
  }, []);
  useEffect(() => {
    Api.getDataPromocodesArchive().then((res) =>
      setPromocodesArchive(res.results)
    );
  }, []);

  return (
    <main className='main'>
      {loggedIn && (
        <>
          <Header unseen={unseenCount} notice={notice} />
          <Sidebar />
        </>
      )}
      <Routes>
        <Route path='/login' element={<Login onLogin={handleLogin} />} />

        <Route
          path={'/data-ambassador'}
          element={
            <ProtectedRoute
              path='/data-ambassador'
              loggedIn={loggedIn}
              component={DataAmbassador}
              ambassadors={ambassadors}
            />
          }
        />

        <Route
          path={'/promocode'}
          element={
            <ProtectedRoute
              path='/promocode'
              loggedIn={loggedIn}
              component={Promocode}
              promocodes={promocodes}
              promocodesArchive={promocodesArchive}
            />
          }
        />

        <Route
          path={'/content'}
          element={
            <ProtectedRoute
              path='/content'
              loggedIn={loggedIn}
              component={Content}
              cards={cards}
            />
          }
        />

        <Route
          path={'/program'}
          element={
            <ProtectedRoute
              path='/program'
              loggedIn={loggedIn}
              component={Program}
              program={program}
            />
          }
        />

        <Route
          path={'/budjet'}
          element={
            <ProtectedRoute
              path='/budjet'
              loggedIn={loggedIn}
              component={Budjet}
              budjet={budjet}
              sum={sum}
            />
          }
        />

        <Route
          path={'/sending'}
          element={
            <ProtectedRoute
              path='/sending'
              loggedIn={loggedIn}
              component={Sending}
              sending={sending}
            />
          }
        />

        <Route
          path={'/notice'}
          element={
            <ProtectedRoute
              path='/notice'
              loggedIn={loggedIn}
              component={Notice}
              notice={notice}
            />
          }
        />

        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  );
};
export default AppRouter;
