import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconDone from '../../../../assets/ContentIconDone.svg';
import IconDoneOrange from '../../../../assets/ContentIconDoneOrange.svg';
import IconDoneGreen from '../../../../assets/ContentIconDoneGreen.svg';
import './ContentCount.css';

interface ContentCountProps {
  count?: string;
  countColor?: string;
  increaseCounter?: () => void;
}

export default function ContentCount({ count, countColor, increaseCounter }: ContentCountProps) {
  let doneIcon: string;

  if (count === '2/4' || count === '3/4') {
    doneIcon = IconDoneOrange;
    countColor = 'card__orange-text';
  } else if (count === '4/4' || count === '5/4') {
    doneIcon = IconDoneGreen;
    countColor = 'card__green-text';
  } else {
    doneIcon = IconDone;
    countColor = 'card__count';
  }

  const handleIncreaseCounter = () => {
    if (increaseCounter) {
      increaseCounter();
    }
  };

  return (
    <div className={`card__done`}>
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

      {increaseCounter && <button onClick={handleIncreaseCounter}>Increase</button>}
    </div>
  );
}
