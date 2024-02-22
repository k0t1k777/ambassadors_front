import './Content.css';
import Header from '../../Header/Header';
import SubmitBtn from '../../SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../SubmitLightBtn/SubmitLightBtn';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <section className="content">
        <nav className="content__nav">
          <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
          <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
        </nav>
        <div className="content__grid">
          <ContentSortWindow width="325px" height="75px" borderRadius="13px">
            <p className="content__title">Новенькие</p>
          </ContentSortWindow>
          <ContentSortWindow width="451px" height="75px" borderRadius="13px">
            <p className="content__title">В процессе</p>
          </ContentSortWindow>
          <ContentSortWindow width="446px" height="75px" borderRadius="13px">
            <p className="content__title">Выполнено</p>
          </ContentSortWindow>
        </div>

        {/* <div className="content__grid">
          <p className="content__grid-social">Соц сети</p>
          <p className="content__grid-name">Имя амбассадора</p>
          <p className="content__grid-text">Ник в телеграм</p>
          <p className="content__grid-text">Ссылка на контент</p>
          <div className="content__grid-number">
            <p className="content__grid-text">Aug 20, 2021</p>
            <div className="content__grid-count">
              <img className="content__grid-icon" src="#" alt="done" />
              <p className="content__grid-data">0/4</p>
            </div>
          </div>
        </div>  */}
      </section>
    </>
  );
}
