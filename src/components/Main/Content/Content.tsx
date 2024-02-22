import './Content.css';
import Header from '../../Header/Header';
import SubmitBtn from '../../SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../SubmitLightBtn/SubmitLightBtn';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';

export default function Content() {
  const ContentData = {
    new: 'Новенькие',
    inProcess: 'В процессе',
    done: 'Выполнено'
  };
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
          <div>
            <ContentSortWindow width="325px" height="75px" borderRadius="13px">
              <p className="content__title">{ContentData.new}</p>
            </ContentSortWindow>
            <ContentCard
              tag="Соц сети"
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Сcылка на контент"
              date="Aug 20, 2021"
              count="0/4"
              width="328px"
              height="258px"
            />
            <ContentCard
              tag="Соц сети"
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Сcылка на контент"
              date="Aug 20, 2021"
              count="0/4"
              width="328px"
              height="258px"
            />
            <ContentCard
              tag="Соц сети"
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Сcылка на контент"
              date="Aug 20, 2021"
              count="0/4"
              width="328px"
              height="258px"
            />
          </div>
          <div>
            <ContentSortWindow width="451px" height="75px" borderRadius="13px">
              <p className="content__title">{ContentData.inProcess}</p>
            </ContentSortWindow>
            <ContentCard
              tag={['Хабр', 'Телеграмм', 'Хабр', 'Телеграмм']}
              name="Имя амбассадора"
              social="Ник в телеграмм"
              link="Ссылка на контент"
              date="Aug 20, 2021"
              count="3/4"
              width="451px"
              height="258px"
            />
          </div>
          <ContentSortWindow width="446px" height="75px" borderRadius="13px">
            <p className="content__title">{ContentData.done}</p>
          </ContentSortWindow>
        </div>
      </section>
    </>
  );
}
