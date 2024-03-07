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

  if (count) {
    const countValue = parseInt(count.split('/')[0]);
    if (countValue >= 1 && countValue < 4) {
      doneIcon = IconDoneOrange;
      countColor = 'card__orange-text';
    } else if (countValue >= 4) {
      doneIcon = IconDoneGreen;
      countColor = 'card__green-text';
    } else {
      doneIcon = IconDone;
      countColor = 'card__count';
    }
  } else {
    doneIcon = IconDone;
    countColor = 'card__count';
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
        {count}
      </Typography>
    </div>
  );
}
