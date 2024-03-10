import './Content.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ContentFilter from '../Content/ContentFilter/ContentFilter';
import { ContentProp, CardCont } from '../../../types/types';
import ContentCard from './ContentCard/ContentCard';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as Api from '../../../utils/utils';

export default function Content({ cards }: { cards: ContentProp }) {
  const [filteredCards, setFilteredCards] = useState<any>(cards);
  const [showCards, setShowCards] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  console.log(filteredCards);
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    let filtered: ContentProp | CardCont[] = cards;
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

  useEffect(() => {
    setShowCards(cards);
  }, []);

  const [showDateBefore, setShowDateBefore] = useState<any>('');
  const [showDateAfter, setShowDateAfter] = useState<any>('');
  const [date, setDate] = useState([dayjs(), dayjs()]);
  useEffect(() => {
    setShowDateBefore(dayjs(date[1]).format('YYYY-MM-DD'));
    setShowDateAfter(dayjs(date[0]).format('YYYY-MM-DD'));
  }, [date]);

  useEffect(() => {
    if (
      showDateBefore !== dayjs().format('YYYY-MM-DD') &&
      showDateAfter !== dayjs().format('YYYY-MM-DD')
    ) {
      Api.getFilteredContentDateRange(showDateAfter, showDateBefore).then(
        (data) => {
          console.log(data);
          setShowCards(data);
        }
      );
    }
  }, [showDateBefore, showDateAfter]);

  useEffect(() => {
    if (inputValue !== '') {
      console.log(inputValue);
      Api.getSearchContent(inputValue).then((data) => {
        console.log(data);
        setShowCards(data);
      });
    } else {
      setShowCards(cards);
    }
  }, [inputValue]);

  //console.log(showDateAfter, showDateBefore);
  console.log(showCards);

  return (
    <section className='content'>
      <nav className='content__nav'>
        <SubmitBtn
          title='Создать задачу'
          width='250px'
          height='50px'
          margin='0 8px 0  0 '
        />
        <SubmitLightBtn
          title='История задач'
          width='250px'
          height='50px'
          color='#23272E'
        />
      </nav>
      <ContentFilter
        onChange={handleCategoryChange}
        date={date}
        setDate={setDate}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory === 'Все' && (
        <div className='content__grid content__grid_all'>
          <div className='content__grids'>
            <ContentCard cardsNew={showCards.new} />
          </div>
          <div className='content__grids'>
            <ContentCard cardsInProgress={showCards.in_progress} />
          </div>

          <div className='content__grids'>
            <ContentCard cardsDone={showCards.done} />
          </div>
        </div>
      )}
      {selectedCategory === 'Выполнено' && (
        <div className='content__grid'>
          <ContentCard cardsDone={showCards.done} />
        </div>
      )}
      {selectedCategory === 'В процессе' && (
        <div className='content__grid'>
          <ContentCard cardsInProgress={showCards.in_progress} />
        </div>
      )}
      {selectedCategory === 'Новенькие' && showCards.new && (
        <div className='content__grid'>
          <ContentCard cardsNew={showCards.new} />
        </div>
      )}
    </section>
  );
}
