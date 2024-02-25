import "./PopupNotice.css";
import AllScreen from "../../assets/All-screen.svg";
import Close from "../../assets/Close_mini.svg";
import UnreadBadge from "../../assets/UnreadBadge.svg";
import Link from "../../assets/Link.svg";


export default function PopupNotice() {
  return (
    <div className="popupNotice">
      <div className="popupNotice__container">
        <div className="popupNotice__container-title">
          <p className="popupNotice__container-title_text">Уведомления</p>
          <div className="popupNotice__container-title_count_wrapper">
            <p className="popupNotice__container-title_count">+2</p>
          </div>
        </div>
        <button className="popupNotice__container-title_button">
          Прочитать все
        </button>
        <div className="popupNotice__container-icons">
          <img
            className="popupNotice__container-icons_all-screen"
            src={AllScreen}
            alt="иконка полноформатного экрана"
          />
          <img
            className="popupNotice__container-icons_close"
            src={Close}
            alt="иконка закрытия"
          />
        </div>
      </div>
      <p className="popupNotice__un-read">Непрочитанные</p>
      <div className="popupNotice__continer-message">
        <div className="popupNotice__continer-text">
          <img
            src={UnreadBadge}
            className="popupNotice__img"
            alt="иконка непрочитанного сообщения"
          />
          <p className="popupNotice__publication">
            <span style={{ fontWeight: '500' }}>Андрей Петров</span> сделал(а)
            публикацию
          </p>
        </div>
        <p className="popupNotice__time">3 м</p>
      </div>
      <div className="popupNotice__container-link">
        <img src={Link} alt="значок ссылки" style={{ marginRight: '8px' }}/>
        <link className="popupNotice__link"></link>
        <p className="popupNotice__link_text">Ссылка на контент</p>
      </div>
      <div className="popupNotice__continer-message">
        <div className="popupNotice__continer-text">
          <img
            src={UnreadBadge}
            className="popupNotice__img"
            alt="иконка непрочитанного сообщения"
          />
          <p className="popupNotice__publication">
            <span style={{ fontWeight: '500' }}>Андрей Петров</span> сделал(а)
            публикацию
          </p>
        </div>
        <p className="popupNotice__time">3 м</p>
      </div>
      <div className="popupNotice__container-link">
        <img src={Link} alt="значок ссылки" style={{ marginRight: '8px' }}/>
        <link className="popupNotice__link"></link>
        <p className="popupNotice__link_text">Ссылка на контент</p>
      </div>
      <p className="popupNotice__un-read">Прочитанные</p>
      <div className="popupNotice__continer-message">
        <div className="popupNotice__continer-text">
          <p className="popupNotice__publication">
            <span style={{ fontWeight: '500' }}>Андрей Петров</span> сделал(а)
            публикацию
          </p>
        </div>
        <p className="popupNotice__time">3 м</p>
      </div>
      <div className="popupNotice__container-link">
        <img src={Link} alt="значок ссылки" style={{ marginRight: '8px' }}/>
        <link className="popupNotice__link"></link>
        <p className="popupNotice__link_text">Ссылка на контент</p>
      </div>
      <div className="popupNotice__continer-message">
        <div className="popupNotice__continer-text">
          <p className="popupNotice__publication">
            <span style={{ fontWeight: '500' }}>Андрей Петров</span> сделал(а)
            публикацию
          </p>
        </div>
        <p className="popupNotice__time">3 м</p>
      </div>
      
      <div className="popupNotice__container-link">
        <img src={Link} alt="значок ссылки" style={{ marginRight: '8px' }}/>
        <link className="popupNotice__link"></link>
        <p className="popupNotice__link_text">Ссылка на контент</p>
      </div>
    </div>
    
  );
}
