import "./PopupNotice.css";
import AllScreen from "../../../assets/All-screen.svg";
import Close from "../../../assets/Close_mini.svg";
import UnreadBadge from "../../../assets/UnreadBadge.svg";
import LinkImg from "../../../assets/Link.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

// interface NoticeItemProps {
//   item: Notification[]
// }
// { item }: NoticeItemProps

export default function PopupNotice() {
  // console.log('item: ', item);
  const [isOpen, setIsOpen] = useState(true);

  const handleClosePopup = () => {
    setIsOpen(false);
  };

   return (
    <>
      {isOpen && (
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
              <Link to="/notice">
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
          <div className="popupNotice__continer-message">
            <div className="popupNotice__continer-text">
              <img
                src={UnreadBadge}
                className="popupNotice__img"
                alt="иконка непрочитанного сообщения"
              />
              <p className="popupNotice__publication">
                <span style={{ fontWeight: "500" }}>Андрей Петров</span>{" "}
                сделал(а) публикацию
              </p>
            </div>
            <p className="popupNotice__time">3 м</p>
          </div>
          <div style={{ padding: "0 16px 0" }}>
            <a href="#" style={{ display: "flex", textDecoration: "none" }}>
              <img
                src={LinkImg}
                alt="значок ссылки"
                className="popupNotice__container-link-img"
              />
              <p className="popupNotice__link_text">Ссылка на контент</p>
            </a>
          </div>
          <div className="popupNotice__continer-message">
            <div className="popupNotice__continer-text">
              <img
                src={UnreadBadge}
                className="popupNotice__img"
                alt="иконка непрочитанного сообщения"
              />
              <p className="popupNotice__publication">
                <span style={{ fontWeight: "500" }}>Андрей Петров</span>{" "}
                сделал(а) публикацию
              </p>
            </div>
            <p className="popupNotice__time">3 м</p>
          </div>
          <div style={{ padding: "0 16px 0" }}>
            <a href="#" style={{ display: "flex", textDecoration: "none" }}>
              <img
                src={LinkImg}
                alt="значок ссылки"
                className="popupNotice__container-link-img"
              />
              <p className="popupNotice__link_text">Ссылка на контент</p>
            </a>
          </div>
          <div className="popupNotice__container-un-read_button">
            <p className="popupNotice__un-read">Прочитанные</p>
            <button className="popupNotice__un-read_button">Очистить</button>
          </div>
          <div className="popupNotice__continer-message">
            <div className="popupNotice__continer-text">
              <p className="popupNotice__publication popupNotice__publication_color_gray">
                <span style={{ fontWeight: "500" }}>Андрей Петров</span>{" "}
                сделал(а) публикацию
              </p>
            </div>
            <p className="popupNotice__time">3 м</p>
          </div>
          <div style={{ padding: "0 16px 0" }}>
            <a href="#" style={{ display: "flex", textDecoration: "none" }}>
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
          <div className="popupNotice__continer-message">
            <div className="popupNotice__continer-text">
              <p className="popupNotice__publication popupNotice__publication_color_gray">
                <span style={{ fontWeight: "500" }}>Андрей Петров</span>{" "}
                сделал(а) публикацию
              </p>
            </div>
            <p className="popupNotice__time">3 м</p>
          </div>
          <div style={{ padding: "0 16px 0" }}>
            <a href="#" style={{ display: "flex", textDecoration: "none" }}>
              <img
                src={LinkImg}
                alt="значок ссылки"
                className="popupNotice__container-link-img"
              />
              <p className="popupNotice__link_text popupNotice__link_text_color_gray">
                Ссылка на контент
              </p>{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
