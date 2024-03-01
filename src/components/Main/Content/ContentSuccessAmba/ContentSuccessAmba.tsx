import './ContentSuccessAmba.css';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';
import { ContentData } from '../../../../utils/constants';

export default function ContentSuccessAmba() {
  return (
    <>
      <ContentSortWindow width="1286px">
        <p className="content__title__success">{ContentData.done}</p>
      </ContentSortWindow>
      <div className="content__cards__container">
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
        <ContentCard
          height="126px"
          linkContent="Ссылка на контент"
          linkPhoto="Ссылка на фото"
          count="4/4"
        />
      </div>
    </>
  );
}
