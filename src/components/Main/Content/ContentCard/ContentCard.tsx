import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './ContentCard.css';
import ContentCount from '../../Content/ContentCount/ContentCount';
import ContentClip from '../../../../assets/ContentClip.svg';
import PopupCreateTask from '../../../PopupCreateTask/PopupCreateTask';

interface ContentCardProps {
  name?: string;
  telegram?: string;
  linkContent?: string;
  linkPhoto?: string;
  count?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  // publicationCount?: number;
}

export default function ContentCard({
  name,
  telegram,
  // publicationCount,
  linkContent,
  linkPhoto,
  count,
  width,
  height,
  borderRadius
}: ContentCardProps) {
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
                {name || 'Имя амбассадора'}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'YSText',
                  fontSize: '13px',
                  color: '#797981'
                }}
              >
                {telegram || 'Ник в телеграмм'}
              </Typography>
            </div>
            <ContentCount count={count} />
            {/* <ContentCount count={publicationCount} /> */}
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
      <PopupCreateTask open={isModalOpen} handleClose={handleClose} count={count} />
    </>
  );
}
