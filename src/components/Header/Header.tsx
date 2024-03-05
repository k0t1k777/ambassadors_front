import "./Header.css";
import Bell from "../../assets/Bell.svg";
import Quest from "../../assets/Quest.svg";
import Settings from "../../assets/Settings.svg";
import { useLocation } from "react-router-dom";
import PopupQuestion from "../Popup/PopupQuestion/PopupQuestion";
import PopupNotice from "../Popup/PopupNotice/PopupNotice";
import { useState } from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "" }: HeaderProps) {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isQuestionPopupOpen, setIsQuestionPopupOpen] = useState(false);


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

  return (
    <header className='header'>
      <h1 className='header__title'>
        {(ambassadorsRoute && 'Данные амбассадоров') ||
          (promocodeRoute && 'Промокоды') ||
          (contentRoute && 'Контент') ||
          (programRoute && 'Програм') ||
          (sendingRoute && 'Сендинг') ||
          (budjetRoute && 'Бюджет')}
      </h1>
      <div className='header__container'>
        {isSettingsIcon ? (
          <>
            <img
              src={Bell}
              className='sidebar__icon'
              alt='Bell'
              onClick={handleBellClick}
            />
            <img src={Settings} className='sidebar__icon' alt='Settings' />
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
              className='sidebar__icon sidebar__icon_hover'
              alt='Quest'
            />
          </>
        ) : (
          <>
            <img src={Bell} className='sidebar__icon' alt='Bell' />
            <img src={Settings} className='sidebar__icon' alt='Settings' />
          </>
        )}
      </div>
      {isPopupOpen && <PopupNotice />}
    </header>
  );
}
