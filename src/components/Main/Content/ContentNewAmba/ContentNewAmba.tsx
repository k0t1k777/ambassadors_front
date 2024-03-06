import './ContentNewAmba.css';
// import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
// import { ContentData } from '../../../../utils/constants';
import ContentCount from '../ContentCount/ContentCount';
import { CardContent, Typography } from '@mui/material';

interface ContentNewAmbaProps {
  name?: string;
  telegram?: string;
  publicationsCount?: number;
  onClick?: () => void;
  count?: string;
}

export default function ContentNewAmba({ name, telegram, onClick, count }: ContentNewAmbaProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <>
      <div className="card-new" onClick={handleClick}>
        <CardContent className="card-new__content" sx={{ padding: '0' }}>
          <div className="card-new__contents">
            <div className="card-new__user">
              <Typography
                sx={{
                  fontFamily: 'YSText',
                  fontSize: '18px',
                  color: '#1A1B22'
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'YSText',
                  fontSize: '13px',
                  color: '#797981'
                }}
              >
                {telegram}
              </Typography>
            </div>
            <ContentCount count={count} />
          </div>
        </CardContent>
      </div>
    </>
  );
}
