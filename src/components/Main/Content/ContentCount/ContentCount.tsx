import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconDone from '../../../../assets/ContentIconDone.svg';
import IconDoneOrange from '../../../../assets/ContentIconDoneOrange.svg';
import IconDoneGreen from '../../../../assets/ContentIconDoneGreen.svg';
import './ContentCount.css';

interface ContentCountProps {
  count?: string;
  countColor?: string;
}

export default function ContentCount({ count, countColor }: ContentCountProps) {
  let doneIcon: string;
  let displayedCount: string;
  if (count) {
    const countValue = parseInt(count.split('/')[0]);
    const limitedCount = Math.min(countValue, 5); // Ограничение счетчика до 5
    displayedCount = `${limitedCount}/4`;

    if (limitedCount >= 1 && limitedCount < 4) {
      doneIcon = IconDoneOrange;
      countColor = 'card__orange-text';
    } else if (limitedCount >= 4) {
      doneIcon = IconDoneGreen;
      countColor = 'card__green-text';
    } else {
      doneIcon = IconDone;
      countColor = 'card__count';
    }
  } else {
    doneIcon = IconDone;
    countColor = 'card__count';
    displayedCount = '0/4';
  }
  return (
    <div className="card__done">
      <CardMedia
        component="img"
        image={doneIcon}
        alt="Done Icon"
        sx={{
          width: '23px',
          height: '23px',
          paddingRight: '8px'
        }}
      />
      <Typography
        className={`card__count ${countColor}`}
        sx={{ fontWeight: '700', fontFamily: 'DMSans', fontSize: '17px' }}
      >
        {displayedCount}
      </Typography>
    </div>
  );
}
