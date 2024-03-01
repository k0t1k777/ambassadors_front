import "./TableSending.css";
import ArrowDown from "../../../assets/Arrow_down.svg";
import ArrowUp from "../../../assets/Arrow_up.svg";
import { useState } from "react";

export default function DataTable() {
  const [isArrowUp, setIsArrowUp] = useState(false);

  const handleArrowClick = () => {
    setIsArrowUp(!isArrowUp);
  };
  return (
    <div className="table__sending">
      <div className="table__container-header">
        <div className="table__check table__th_size_s"></div>
        <div className="table__name table__th_size_xl">Имя амбассадора</div>
        <div className="table__merch table__th_size_x">Мерч</div>
        <div className="table__clothe table__th_size_x">Размер толстовки</div>
        <div className="table__socks table__th_size_x">Размер носков</div>
        <div className="table__date table__th_size_x">Дата регистрации</div>
        <div className="table__curator table__th_size_l">Имя куратора</div>
        <div className="table__index table__th_size_m">Индекс</div>
        <div className="table__th_size_s"></div>
      </div>
      <div className="table__container-data">
        <div className="table__check table__th_size_s"></div>
        <div className="table__name table__th_size_xl">Мерч</div>
        <div className="table__merch table__th_size_x">Силект</div>
        <div className="table__clothe table__th_size_x">Силект</div>
        <div className="table__socks table__th_size_x">Силект</div>
        <div className="table__date table__th_size_x">23.02.2024</div>
        <div className="table__curator table__th_size_l">Имя куратора</div>
        <div className="table__index table__th_size_m">154178</div>
        <div
          className="table__dropdawn table__th_size_s"
          onClick={handleArrowClick}
        >
          {isArrowUp ? (
            <img src={ArrowUp} alt="иконка стрелочки" />
          ) : (
            <img src={ArrowDown} alt="иконка стрелочки" />
          )}
        </div>
      </div>
      {isArrowUp && (
        <div className="table__container-dropdawn">
          <div className="table__container-dropdawn-item table__td_size_s">
            <p className="table__title">Страна</p>
            <p className="table__subtitle">Россия</p>
          </div>
          <div className="table__container-dropdawn-item table__td_size_l">
            <p className="table__title">Город</p>
            <p className="table__subtitle">Москва</p>
          </div>
          <div className="table__container-dropdawn-item table__td_size_xl">
            <p className="table__title">Улица, дом</p>
            <p className="table__subtitle">Пионерская 43, дом 15</p>
          </div>
          <div className="table__container-dropdawn-item table__td_size_x">
            <p className="table__title">Телефон</p>
            <p className="table__subtitle">+791234567891</p>
          </div>
          <div className="table__container-dropdawn-item table__td_size_s">
            <p className="table__title">Месяц</p>
            <p className="table__subtitle">Февраль</p>
          </div>
          <div className="table__container-dropdawn-item table__td_size_xxl">
            <p className="table__title">Комментарий</p>
            <p className="table__subtitle">Инпут</p>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
