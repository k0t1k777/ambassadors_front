import './Content.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ContentFilter from '../Content/ContentFilter/ContentFilter';
import { ContentProp } from '../../../types/types';
import ContentCard from './ContentCard/ContentCard';

export default function Content({ cards }: { cards: ContentProp }) {
  console.log(cards);
  return (
    <section className="content">
      <nav className="content__nav">
        <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
        <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
      </nav>
      <div className="content__filter">
        <ContentFilter />
      </div>
      <div className="content__grid">
        <div className="content__grids">{cards.new && <ContentCard cardsNew={cards.new} />}</div>
        <div className="content__grids">
          {cards.in_progress && <ContentCard cardsInProgress={cards.in_progress} />}
        </div>
        <div className="content__grids">{cards.done && <ContentCard cardsDone={cards.done} />}</div>
      </div>
    </section>
  );
}
