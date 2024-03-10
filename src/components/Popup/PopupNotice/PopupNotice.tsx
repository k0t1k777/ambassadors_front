import "./PopupNotice.css";
import AllScreen from "../../../assets/All-screen.svg";
import Close from "../../../assets/Close_mini.svg";
import UnreadBadge from "../../../assets/UnreadBadge.svg";
import LinkImg from "../../../assets/Link.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Notification } from "../../Main/Notice/Notice";
import { useLocation } from "react-router-dom";

export interface NoticeProp {
  item: Notification[];
  handleRouteChange: () => void;
  unseen: string;
   allAsRead: () => void;
}

export default function PopupNotice({
  item,
  handleRouteChange,
  unseen,
  
}: NoticeProp) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const handleClosePopup = () => {
    setIsOpen(false);
    handleRouteChange();
  };

  useEffect(() => {
    if (
      location.pathname === "/budjet" ||
      location.pathname === "/sending" ||
      location.pathname === "/program"
    ) {
      const popupNoticeElement = document.querySelector(
        ".popupNotice"
      ) as HTMLElement;
      if (popupNoticeElement) {
        popupNoticeElement.classList.add("popupNotice__type_right");
      }
    } else {
      const popupNoticeElement = document.querySelector(
        ".popupNotice"
      ) as HTMLElement;
      if (popupNoticeElement) {
        popupNoticeElement.classList.remove("popupNotice__type_right");
      }
    }
  }, [location.pathname]);

  return (
    <>
      {isOpen && (
        <div className="popupNotice ">
          <div className="popupNotice__container">
            <div className="popupNotice__container-title">
              <p className="popupNotice__container-title_text">Уведомления</p>
              <div className="popupNotice__container-title_count_wrapper">
                <p className="popupNotice__container-title_count">+{unseen}</p>
              </div>
            </div>
            <button
              className="popupNotice__container-title_button"
              onClick={handleAllAsRead}
            >
              Прочитать все
            </button>
            <div className="popupNotice__container-icons">
              <Link to="/notice" onClick={handleClosePopup}>
                <img
                  className="popupNotice__container-icons_all-screen"
                  src={AllScreen}
                  alt="иконка полноформатного экрана"
                />{" "}
              </Link>
              <img
                className="popupNotice__container-icons_close"
                src={Close}
                alt="иконка закрытия"
                onClick={handleClosePopup}
              />
            </div>
          </div>
          <p className="popupNotice__un-read">Непрочитанные</p>
          {item.map((notification, index) =>
            notification.unread ? (
              <>
                <div key={index} className="popupNotice__continer-message">
                  <div className="popupNotice__continer-text">
                    <img
                      src={UnreadBadge}
                      className="popupNotice__img"
                      alt="иконка непрочитанного сообщения"
                    />
                    <p className="popupNotice__publication">
                      <span style={{ fontWeight: "500" }}>
                        {notification.actor_content_type}
                      </span>{" "}
                      сделал(а) публикацию
                    </p>
                  </div>
                  <p className="popupNotice__time">{notification.time_since}</p>
                </div>
                <div style={{ padding: "0 16px 0" }}>
                  <a
                    href={notification.description}
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <img
                      src={LinkImg}
                      alt="значок ссылки"
                      className="popupNotice__container-link-img"
                    />
                    <p className="popupNotice__link_text">Ссылка на контент</p>
                  </a>
                </div>
              </>
            ) : null
          )}
          <div className="popupNotice__container-un-read_button">
            <p className="popupNotice__un-read">Прочитанные</p>
            <button className="popupNotice__un-read_button">Очистить</button>
          </div>
          {item.map((notification, index) =>
            notification.unread ? null : (
              <>
                <div key={index} className="popupNotice__continer-message">
                  <div className="popupNotice__continer-text">
                    <p className="popupNotice__publication popupNotice__publication_color_gray">
                      <span style={{ fontWeight: "500" }}>
                        {notification.actor_content_type}
                      </span>{" "}
                      сделал(а) публикацию
                    </p>
                  </div>
                  <p className="popupNotice__time">{notification.time_since}</p>
                </div>
                <div style={{ padding: "0 16px 0" }}>
                  <a
                    href={notification.verb}
                    style={{ display: "flex", textDecoration: "none" }}
                  >
                    <img
                      src={LinkImg}
                      alt="значок ссылки"
                      className="popupNotice__container-link-img"
                    />
                    <p className="popupNotice__link_text popupNotice__link_text_color_gray">
                      Ссылка на контент
                    </p>
                  </a>
                </div>
              </>
            )
          )}
        </div>
      )}
    </>
  );
}
