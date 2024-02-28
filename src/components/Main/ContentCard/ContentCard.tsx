import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './ContentCard.css';
import IconDone from '../../../../assets/ContentIconDone.svg';
import IconDoneOrange from '../../../../assets/ContentIconDoneOrange.svg';
import IconDoneGreen from '../../../../assets/ContentIconDoneGreen.svg';
import ContentClip from '../../../../assets/ContentClip.svg';

import PopupCreateTask from '../../../PopupCreateTask/PopupCreateTask';

interface ContentCardProps {
  name: string;
  telegram: string;
  linkContent?: string;
  linkPhoto?: string;
  count: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export default function ContentCard({
  name,
  telegram,
  linkContent,
  linkPhoto,
  count,
  width,
  height,
  borderRadius
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentLinkOpen, setIsContentLinkOpen] = useState(false);
  const [isPhotoLinkOpen, setIsPhotoLinkOpen] = useState(false);

  const handleOpen = () => {
    if (!isContentLinkOpen && !isPhotoLinkOpen) {
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenContentLink = () => {
    setIsContentLinkOpen(true);
    window.open(linkContent, '_blank');
  };

  const handleOpenPhotoLink = () => {
    setIsPhotoLinkOpen(true);
    window.open(linkContent, '_blank');
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, [isContentLinkOpen, isPhotoLinkOpen]);

  return (
    <>
      <Card
        className="card"
        onClick={handleOpen}
        sx={{
          boxShadow: 'none',
          borderRadius: borderRadius ? borderRadius : '10px',
          padding: '0',
          width: width ? width : '415px',
          height: height ? height : '85px'
        }}
      >
        <CardContent className="card__content" sx={{ padding: '0' }}>
          <div className="card__contents">
            <div className="card__user">
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
          </div>
          <div className="card__text">
            {linkContent && (
              <div className="card__texts" onClick={handleOpenContentLink}>
                <CardMedia
                  component="img"
                  image={ContentClip}
                  alt="Clip Icon"
                  sx={{
                    width: '14px',
                    height: '16px',
                    paddingRight: '7px'
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'YSText',
                    color: '#23272E'
                  }}
                >
                  {linkContent}
                </Typography>
              </div>
            )}
            {linkPhoto && (
              <div className="card__texts" onClick={handleOpenPhotoLink}>
                <CardMedia
                  component="img"
                  image={ContentClip}
                  alt="Clip Icon"
                  sx={{
                    width: '14px',
                    height: '16px',
                    paddingRight: '7px'
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'YSText',
                    color: '#23272E'
                  }}
                >
                  {linkPhoto}
                </Typography>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <PopupCreateTask open={isModalOpen} handleClose={handleClose} />
    </>
  );
}
