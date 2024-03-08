import './Content.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ContentFilter from '../Content/ContentFilter/ContentFilter';
import { ContentProp } from '../../../types/types';
import ContentCard from './ContentCard/ContentCard';
import { useState } from 'react';

export default function Content({ cards }: { cards: ContentProp }) {
  const [filteredCards, setFilteredCards] = useState<ContentProp>(cards);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    let filtered: ContentProp = cards;
    if (category !== 'Все') {
      switch (category) {
        case 'Новенькие':
          filtered = cards.new;
          break;
        case 'В процессе':
          filtered = cards.in_progress;
          break;
        case 'Выполнено':
          filtered = cards.done;
          break;
        default:
          filtered = [];
      }
    }
    setFilteredCards(filtered);
  };
  return (
    <section className="content">
      <nav className="content__nav">
        <SubmitBtn title="Создать задачу" width="250px" height="50px" margin="0 8px 0  0 " />
        <SubmitLightBtn title="История задач" width="250px" height="50px" color="#23272E" />
      </nav>
      <div className="content__filter">
        <ContentFilter onChange={handleCategoryChange} />
      </div>
      <div className="content__grid">
        <div className="content__grids">
          {(selectedCategory === 'Новенькие' || selectedCategory === 'Все') && cards.new && (
            <ContentCard cardsNew={cards.new} />
          )}
        </div>
        <div className="content__grids">
          {(selectedCategory === 'В процессе' || selectedCategory === 'Все') &&
            cards.in_progress && <ContentCard cardsInProgress={cards.in_progress} />}
        </div>
        <div className="content__grids">
          {(selectedCategory === 'Выполнено' || selectedCategory === 'Все') && cards.done && (
            <ContentCard cardsDone={cards.done} />
          )}
        </div>
      </div>
    </section>
  );
}
