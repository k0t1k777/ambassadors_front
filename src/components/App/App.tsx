import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import PopupSendMerch from '../PopupSendMerch/PopupSendMerch';

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
  const [budjet, setBudjet] = useState<BudjetMerch[]>([]);
  const [cards, setCards] = useState<ContentProp>({
    new: [],
    in_progress: [],
    done: []
  });

  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('loggedIn') === 'true';
  });

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
    console.log('login');
    navigate('/data-ambassador', { replace: true });
  };

  // useEffect(() => {
  //   Api.getNotificationsAllAsRead()
  //     .then((data) => {
  //       setNotificationsAllAsRead(data);
  //       console.log('getNotificationsAllAsRead: ', data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    Promise.all([
      Api.getDataAmbassador(),
      Api.getDataSending(),
      Api.getProgram(),
      Api.getNotifications(),
      Api.getNotificationsUnseen(),
      Api.getBudjet(),
      Api.getContent(),
      Api.getDataPromocodes(),
      Api.getDataPromocodesArchive()
    ])
      .then(
        ([
          dataAmbassador,
          dataSending,
          program,
          notifications,
          notificationsUnseen,
          budjet,
          content,
          promocodes,
          promocodesArchive
        ]) => {
          setAmbassadors(dataAmbassador.results);
          setSending(dataSending.results);
          setProgram(program.results);
          setNotice(notifications.results);
          setUnseenCount(notificationsUnseen.unseen);
          setBudjet(budjet.results.data);
          setSum(budjet.results.grand_total);
          setCards(content);
          setPromocodes(promocodes.results);
          setPromocodesArchive(promocodesArchive.results);
          console.log('Успешно app');
        }
      )
      .catch(err => {
        console.log('Ошибка app:', err);
      });
  }, []);

  return (
    <main className="main">
      {loggedIn && (
        <>
          <Header unseen={unseenCount} notice={notice} />
          <Sidebar />
        </>
      )}
      <Routes>
        {!loggedIn && <Route path="/" element={<Navigate to="/login" />} />}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path={'/data-ambassador'}
          element={
            <ProtectedRoute
              path="/data-ambassador"
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
              path="/promocode"
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
            <ProtectedRoute path="/content" loggedIn={loggedIn} component={Content} cards={cards} />
          }
        />
        <Route
          path={'/program'}
          element={
            <ProtectedRoute
              path="/program"
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
              path="/budjet"
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
              path="/sending"
              loggedIn={loggedIn}
              component={Sending}
              sending={sending}
            />
          }
        />
        <Route
          path={'/notice'}
          element={
            <ProtectedRoute path="/notice" loggedIn={loggedIn} component={Notice} notice={notice} />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};
export default AppRouter;
