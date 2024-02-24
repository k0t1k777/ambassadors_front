import './Header.css';
import Bell from '../../assets/Bell.svg';
import Quest from '../../assets/Quest.svg';
import Settings from '../../assets/Settings.svg';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = '' }: HeaderProps) {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  const isSettingsIcon =
    location.pathname === '/budjet' ||
    location.pathname === '/sending' ||
    location.pathname === '/program';

  return (
    <div className="header">
      <h2 className="header__title">{title}</h2>
      <div className="header__container">
        {isSettingsIcon ? (
          <>
            <img src={Bell} className="sidebar__icon" alt="Bell" />
            <img src={Settings} className="sidebar__icon" alt="Settings" />
            <img src={Quest} className="sidebar__icon" alt="Quest" />
          </>
        ) : (
          <>
            <img src={Bell} className="sidebar__icon" alt="Bell" />
            <img src={Settings} className="sidebar__icon" alt="Settings" />
          </>
        )}
      </div>
    </div>
  );
}
