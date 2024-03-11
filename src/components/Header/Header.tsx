import './Header.css';
import Bell from '../../assets/Bell.svg?react';
import Quest from '../../assets/Quest.svg?react';
import Settings from '../../assets/Settings.svg?react';
import { useLocation } from 'react-router-dom';
import PopupQuestion from '../Popup/PopupQuestion/PopupQuestion';
import PopupNotice from '../Popup/PopupNotice/PopupNotice';
import { useEffect, useState } from 'react';
import { Notification } from '../Main/Notice/Notice';

export interface NoticeProp {
  notice: Notification[];
  unseen: string;
  handleAllAsRead: () => void;
}



export default function Header({ notice, unseen, handleAllAsRead }: NoticeProp ) {

  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isQuestionPopupOpen, setIsQuestionPopupOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(notice);

  useEffect(() => {
    setShowNotice(notice);
  }, [notice]);

  const handleBellClick = () => {
    setIsPopupOpen(true);
    setIsQuestionPopupOpen(false);
  };

  const handleQuestHover = () => {
    setIsQuestionPopupOpen(true);
    setIsPopupOpen(false);
  };

  const handleQuestLeave = () => {
    setIsQuestionPopupOpen(false);
  };

  const handleRouteChange = () => {
    setIsPopupOpen(false);
  };

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  const isSettingsIcon =
    location.pathname === '/budjet' ||
    location.pathname === '/sending' ||
    location.pathname === '/program';

  const ambassadorsRoute = location.pathname === '/data-ambassador';
  const promocodeRoute = location.pathname === '/promocode';
  const contentRoute = location.pathname === '/content';
  const programRoute = location.pathname === '/program';
  const sendingRoute = location.pathname === '/sending';
  const budjetRoute = location.pathname === '/budjet';
  const noticeRoute = location.pathname === '/notice';

  return (
    <div className="header">
      <h1 className="header__title">
        {(ambassadorsRoute && 'Данные амбассадоров') ||
          (promocodeRoute && 'Промокоды') ||
          (contentRoute && 'Контент') ||
          (programRoute && 'Программа лояльности') ||
          (sendingRoute && 'Отправка мерча') ||
          (budjetRoute && 'Бюджет на мерч') ||
          (noticeRoute && 'Уведомления')}
      </h1>
      <div className="header__container">
        {isSettingsIcon ? (
          <>
            <Bell className="header__sidebar-icon" onClick={handleBellClick} />
            <Settings className="header__sidebar-icon" />
            <Quest
              className="header__sidebar-icon header__sidebar-icon_hover"
              onMouseEnter={handleQuestHover}
              onMouseLeave={handleQuestLeave}
            />
          </>
        ) : (
          <>
            <Bell className="header__sidebar-icon" onClick={handleBellClick} />
            <Settings className="header__sidebar-icon" />
          </>
        )}
        {isQuestionPopupOpen && <PopupQuestion />}
      </div>
      {isPopupOpen && (
        <PopupNotice
        item={showNotice}
        unseen={unseen}
        handleRouteChange={handleRouteChange}
        handleAllAsRead={handleAllAsRead}

        />
      )}
    </div>
  );
}
