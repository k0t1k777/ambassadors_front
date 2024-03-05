import './ContentNewAmba.css';
// import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
// import { ContentData } from '../../../../utils/constants';
import { CardContent, Typography } from '@mui/material';

interface ContentNewAmbaProps {
  name?: string;
  telegram?: string;
  count?: string;
}

export default function ContentNewAmba({ name, telegram, count }: ContentNewAmbaProps) {
  return (
    <>
      <div className="card-new">
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
            {/* <ContentCount count={countCard} /> */}
          </div>
        </CardContent>
      </div>
    </>
  );
}
