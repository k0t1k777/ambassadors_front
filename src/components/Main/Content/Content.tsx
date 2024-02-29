import './Content.css';
import Header from '../../Header/Header';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ContentSortWindow from './ContentSortWindow/ContentSortWindow';
import ContentCard from './ContentCard/ContentCard';
import { ContentData } from '../../../utils/constants';
// import ContentFilter from '../Content/ContentFilter/ContentFilter';

export default function Content() {
  return (
    <>
      <Header title="Контент" />
      <section className="content">
        <nav className="content__nav">
          <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
          <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
        </nav>
        {/* <ContentFilter /> */}
        <div className="content__grid">
          <div className="content__grids">
            <ContentSortWindow>
              <p className="content__title">{ContentData.new}</p>
            </ContentSortWindow>
            <ContentCard count="0/4" />
          </div>
          <div className="content__grids">
            <ContentSortWindow>
              <p className="content__title">{ContentData.inProcess}</p>
            </ContentSortWindow>
            <ContentCard
              height="126px"
              linkContent="Ссылка на контент"
              linkPhoto="Ссылка на фото"
              count="2/4"
            />
          </div>
          <div className="content__grids">
            <ContentSortWindow>
              <p className="content__title">{ContentData.done}</p>
            </ContentSortWindow>
            <ContentCard
              height="126px"
              linkContent="Ссылка на контент"
              linkPhoto="Ссылка на фото"
              count="4/4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
