import "./PopupQuestion.css";
import Nub from "../../../assets/Nub.svg"

export default function PopupQuestion() {
  return (
    <>
    <div className="popup__question">
    <img src={Nub} alt="Иконка стрелки" className="popupQuestion__img"></img>
      <p className="popupQuestion__container_text"> Толстовка - 1000 ₽</p>
      <p className="popupQuestion__container_text">Кофе - 500 ₽</p>
      <p className="popupQuestion__container_text">Стикеры - 200 ₽</p>
      <p className="popupQuestion__container_text">Плюс - 3000 ₽</p>
      <p className="popupQuestion__container_text">Арзамас - 2000 ₽</p>
      <p className="popupQuestion__container_text">Шоппер - 500 ₽</p>
      <p className="popupQuestion__container_text">Рюкзак - 2000 ₽</p>
      <p className="popupQuestion__container_text">Сумка кросс - 1000 ₽</p>
      <p className="popupQuestion__container_text">Носки - 200 ₽</p>
      <p className="popupQuestion__container_text">Скидка 50% - 5000 ₽</p>
      <p className="popupQuestion__container_text">Алиса мини - 8000 ₽</p>
      <p className="popupQuestion__container_text">Алиса биг - 20000 ₽</p>
      <p className="popupQuestion__container_text">
        Клуб учащихся ночью - 5000 ₽
      </p>
    </div>
    </>
  );
}
