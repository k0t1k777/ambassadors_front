import './ContentAllAmba.css';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';
import { ContentData } from '../../../../utils/constants';

export default function ContentAllAmba() {
  return (
    <div className="content__grid">
      <div className="content__grids">
        <ContentSortWindow>
          <p className="content__title">{ContentData.new}</p>
        </ContentSortWindow>
        <ContentCard />
      </div>
      <div className="content__grids">
        <ContentSortWindow>
          <p className="content__title">{ContentData.inProcess}</p>
        </ContentSortWindow>
        <ContentCard />
      </div>
      <div className="content__grids">
        <ContentSortWindow>
          <p className="content__title">{ContentData.done}</p>
        </ContentSortWindow>
        <ContentCard />
      </div>
    </div>
  );
}
