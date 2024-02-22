import './Content.css';
import Header from '../../Header/Header';
import SubmitBtn from '../../SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../SubmitLightBtn/SubmitLightBtn';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <section className="content">
        <nav className="content__nav">
          <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
          <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
        </nav>
        <div>
          <p>Filter</p>
        </div>
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

        <ContentCard
          tag="Соц сети"
          name="Имя амбассадора"
          social="Ник в телеграмм"
          link="Сcылка на контент"
          date="Aug 20, 2021"
          count="0/4"
        />
      </section>
    </>
  );
}
