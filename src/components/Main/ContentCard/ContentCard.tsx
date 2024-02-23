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
  photo?: string;
}

export default function ContentCard({
  tag,
  name,
  social,
  link,
  date,
  count,
  width,
  height,
  photo
}: ContentCardProps) {
  let doneIcon: string;

  let countColor = '';
  if (count === '2/4' || count === '3/4') {
    countColor = 'card__orange-text';
    doneIcon = IconDoneOrange;
  } else if (count === '4/4') {
    countColor = 'card__green-text';
    doneIcon = IconDoneGreen;
  } else {
    doneIcon = IconDone;
  }

  return (
    <Card
      className="card"
      style={{ width, height }}
      sx={{ boxShadow: 'none', borderRadius: '17px', padding: '0' }}
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
        {photo && (
          <CardMedia component="img" image={photo} alt="Content Photo" className="card__photo" />
        )}
        <Typography className="card__name" sx={{ fontSize: '18px' }}>
          {name}
        </Typography>
        <Typography className="card__social">{social}</Typography>
        <Typography className="card__link">{link}</Typography>
        <div className="card__number">
          <Typography className="card__date">{date}</Typography>
          <div className="card__done">
            <CardMedia component="img" image={doneIcon} alt="Done Icon" className="card__icon" />
            <Typography className={`card__count ${countColor}`} sx={{ fontWeight: '700' }}>
              {count}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
