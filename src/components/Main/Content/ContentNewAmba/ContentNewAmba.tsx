import './ContentNewAmba.css';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import ContentCard from '../ContentCard/ContentCard';
import { ContentData } from '../../../../utils/constants';

export default function ContentNewAmba() {
  return (
    <div className="content__grids">
      <ContentSortWindow width="1285">
        <p className="content__title__new">{ContentData.new}</p>
      </ContentSortWindow>
      <ContentCard count="0/4" />
    </div>
  );
}
