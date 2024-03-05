import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import '../../Content/ContentCard/ContentCard.css';
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
}

export default function AmbassadorsContentCard({
  name,
  linkContent,
  linkPhoto,
  count,
  width,
  height,
  borderRadius,
}: ContentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentLinkOpen, setIsContentLinkOpen] = useState(false);
  const [isPhotoLinkOpen, setIsPhotoLinkOpen] = useState(false);
  const [countCard, setCountCard] = useState(count || '0/4');

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

  const updateCount = (newCount: string) => {
    setCountCard(newCount);
    console.log('Saving count:', newCount);
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, [isContentLinkOpen, isPhotoLinkOpen]);

  return (
    <>
      <Card
        className='card'
        onClick={handleOpen}
        sx={{
          boxShadow: 'none',
          borderRadius: borderRadius ? borderRadius : '10px',
          padding: '0',
          width: width ? width : '415px',
          height: height ? height : '85px',
        }}
      >
        <CardContent className='card__content' sx={{ padding: '0' }}>
          <div className='card__contents'>
            <div className='card__user'>
              <Typography
                sx={{
                  fontFamily: 'YSText',
                  fontSize: '18px',
                  color: '#1A1B22',
                }}
              >
                {name || 'Имя амбассадора'}
              </Typography>
            </div>
            <ContentCount count={countCard} />
          </div>
          <div className='card__text'>
            {linkContent && (
              <div className='card__texts' onClick={handleOpenContentLink}>
                <CardMedia
                  component='img'
                  image={ContentClip}
                  alt='Clip Icon'
                  sx={{
                    width: '14px',
                    height: '16px',
                    paddingRight: '7px',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'YSText',
                    color: '#23272E',
                    maxWidth: '124px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {linkContent}
                </Typography>
              </div>
            )}
            {linkPhoto && (
              <div className='card__texts' onClick={handleOpenPhotoLink}>
                <CardMedia
                  component='img'
                  image={ContentClip}
                  alt='Clip Icon'
                  sx={{
                    width: '14px',
                    height: '16px',
                    paddingRight: '7px',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'YSText',
                    color: '#23272E',
                  }}
                >
                  {linkPhoto || 'Photo link'}
                </Typography>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <PopupCreateTask
        open={isModalOpen}
        handleClose={handleClose}
        count={count}
        onSaveCount={updateCount}
      />
    </>
  );
}
