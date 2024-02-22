import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './ContentCard.css';
import IconDone from '../../../assets/ContentIconDone.svg';
import IconDoneOrange from '../../../assets/ContentIconDoneOrange.svg';
import IconDoneGreen from '../../../assets/ContentIconDoneGreen.svg';

interface ContentCardProps {
  tag: string | string[];
  name: string;
  social: string;
  link: string;
  date: string;
  count: string;
  width?: string;
  height?: string;
}

export default function ContentCard({
  tag,
  name,
  social,
  link,
  date,
  count,
  width = '451px',
  height = '258px'
}: ContentCardProps) {
  let doneIcon: string;
  const orangeDoneIcon = IconDoneOrange;
  const greenDoneIcon = IconDoneGreen;

  let countColorClass = '';
  if (count === '2/4' || count === '3/4') {
    countColorClass = 'card__orange-text';
    doneIcon = orangeDoneIcon;
  } else if (count === '4/4') {
    countColorClass = 'card__green-text';
    doneIcon = greenDoneIcon;
  } else {
    doneIcon = IconDone;
  }

  return (
    <Card
      className="card"
      style={{ width, height }}
      sx={{ boxShadow: 'none', borderRadius: '17px' }}
    >
      <CardContent sx={{ padding: '22px  25px 19px 25px' }}>
        {typeof tag === 'string' ? (
          <Typography className="card__tag card__tag-single" sx={{ width: '87px' }}>
            {tag}
          </Typography>
        ) : (
          <div className="card__tags">
            {tag.map((tag, index) => (
              <Typography key={index} className="card__tag" sx={{ marginRight: '5px' }}>
                {tag}
              </Typography>
            ))}
          </div>
        )}
        <Typography className="card__name">{name}</Typography>
        <Typography className="card__social">{social}</Typography>
        <Typography className="card__link">{link}</Typography>
        <div className="card__number">
          <Typography className="card__date">{date}</Typography>
          <div className="card__done">
            <CardMedia component="img" image={doneIcon} alt="Done Icon" className="card__icon" />
            <Typography className={`card__count ${countColorClass}`}>{count}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
