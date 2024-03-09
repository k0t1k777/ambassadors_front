import { useState, useEffect } from 'react';
import { CardContent, Typography, CardMedia } from '@mui/material';
import '../../Content/ContentCard/ContentCard.css';
import ContentCount from '../../Content/ContentCount/ContentCount';
import ContentClip from '../../../../assets/ContentClip.svg';
import { Ambassador } from '../DataAmbassador';
import { cardContentData } from '../../../../utils/constants';
import './AmbassadorsContentCard.css';

interface AmbassadorsContentCardProps {
  name?: string;
  count?: string;
  ambassador?: Ambassador;
  onClick?: () => void;
}

export default function AmbassadorsContentCard({
  ambassador,
  onClick
}: AmbassadorsContentCardProps) {
  const [isContentLink, setIsContentLink] = useState(false);
  const [isContentFile, setIsContentFile] = useState(false);

  const publicationCount = ambassador?.content
    ? `${Math.min(ambassador.content.length, 4)}/4`
    : '0/4';

  const latestContentItem = ambassador?.content ? ambassador?.content[0] : null;

  console.log(ambassador);

  const handleOpenContentLink = () => {
    if (latestContentItem) {
      setIsContentLink(true);
      if (latestContentItem.link) {
        window.open(latestContentItem.link, '_blank');
      }
    }
  };

  const handleOpenContentFile = () => {
    if (latestContentItem && latestContentItem.file) {
      setIsContentFile(true);
      window.open(latestContentItem.file, '_blank');
    }
  };

  useEffect(() => {}, [isContentLink, isContentFile]);

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className="card-amba" onClick={handleClick}>
      <CardContent className="card-amba__content" sx={{ padding: '0' }}>
        <div className="card-amba__contents">
          <div className="card-amba__user">
            <Typography
              sx={{
                fontFamily: 'YSText',
                fontSize: '18px',
                color: '#1A1B22'
              }}
            >
              {ambassador?.name}
            </Typography>
          </div>
          <ContentCount count={publicationCount} />
        </div>
        <div className="card-amba__text">
          {latestContentItem && (
            <>
              <div className="card-amba__texts" onClick={handleOpenContentLink}>
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
                  {latestContentItem.link ? latestContentItem.link : cardContentData.link}
                </Typography>
              </div>
              <div className="card-amba__texts" onClick={handleOpenContentFile}>
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
                  {latestContentItem.file ? latestContentItem.file : cardContentData.file}
                </Typography>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </div>
  );
}
