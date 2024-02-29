import './ContentInProcessAmba.css';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';
import { ContentData } from '../../../../utils/constants';

export default function ContentInProcessAmba() {
  return (
    <div className="content__grids">
      <ContentSortWindow width="1286px">
        <p className="content__title__process">{ContentData.inProcess}</p>
      </ContentSortWindow>
      <ContentCard
        height="126px"
        linkContent="Ссылка на контент"
        linkPhoto="Ссылка на фото"
        count="2/4"
      />
    </div>
  );
}
