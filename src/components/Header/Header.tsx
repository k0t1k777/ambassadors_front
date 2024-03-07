import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";
import { useLocation } from "react-router-dom";
import PopupQuestion from "../Popup/PopupQuestion/PopupQuestion";
import PopupNotice from "../Popup/PopupNotice/PopupNotice";
import { useEffect, useState } from "react";

export interface NotificationCount {
  count: string;
}
export interface NoticeProp {
  noticeCount: NotificationCount[];
}

export default function Header({ noticeCount }: NotificationCount) {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isQuestionPopupOpen, setIsQuestionPopupOpen] = useState(false);
  const [showNoticeCount, setShowNoticeCount] = useState(noticeCount);
  console.log('showNotice: ', noticeCount);

  useEffect(() => {
    setShowNoticeCount(noticeCount);
  }, [noticeCount]);


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

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const isSettingsIcon =
    location.pathname === "/budjet" ||
    location.pathname === "/sending" ||
    location.pathname === "/program";

    const ambassadorsRoute = location.pathname === '/data-ambassador';
    const promocodeRoute = location.pathname === '/promocode';
    const contentRoute = location.pathname === '/content';
    const programRoute = location.pathname === '/program';
    const sendingRoute = location.pathname === '/sending';
    const budjetRoute = location.pathname === '/budjet';
    const noticeRoute = location.pathname === '/notice';

  return (
    <div className="header">
      <h1 className="header__title"> {(ambassadorsRoute && 'Данные амбассадоров') ||
          (promocodeRoute && 'Промокоды') ||
          (contentRoute && 'Контент') ||
          (programRoute && 'Программа лояльности') ||
          (sendingRoute && 'Отправка мерча') ||
          (budjetRoute && 'Бюджет на мерч') ||
          (noticeRoute && 'Уведомления')}</h1>
      <div className="header__container">
        {isSettingsIcon ? (
          <>
            <img
              src={Bell}
              className="sidebar__icon"
              alt="Bell"
              onClick={handleBellClick}
            />
            <img src={Settings} className="sidebar__icon" alt="Settings" />
            <img
              src={Quest}
              className="sidebar__icon sidebar__icon_hover"
              alt="Quest"
              onMouseEnter={handleQuestHover}
              onMouseLeave={handleQuestLeave}
            />
          </>
        ) : (
          <>
            <img
              src={Bell}
              className="sidebar__icon"
              alt="Bell"
              onClick={handleBellClick}
            />
            <img src={Settings} className="sidebar__icon" alt="Settings" />
          </>
        )}
        {isQuestionPopupOpen && <PopupQuestion />}
      </div>
      {isPopupOpen && <PopupNotice showNoticeCount={showNoticeCount} />}
    </div>
  );
}