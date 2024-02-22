import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './ContentCard.css';
import IconDone from '../../../assets/ContentIconDone.svg';

interface ContentCardProps {
  tag: string;
  name: string;
  social: string;
  link: string;
  date: string;
  count: string;
}

export default function ContentCard({ tag, name, social, link, date, count }: ContentCardProps) {
  const doneIcon = IconDone;

  return (
    <Card className="card">
      <CardContent className="card__content">
        <Typography className="card__tag">{tag}</Typography>
        <Typography className="card__name">{name}</Typography>
        <Typography className="card__social">{social}</Typography>
        <Typography className="card__link">{link}</Typography>
        <div className="card__number">
          <Typography className="card__date">{date}</Typography>
          <div className="card__done">
            <CardMedia component="img" image={doneIcon} alt="Done Icon" className="card__icon" />
            <Typography className="card__count">{count}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
