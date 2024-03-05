import { CardContent, Typography, CardMedia } from '@mui/material';
import { ContentItem } from '../../../../types/types';
import React from 'react';
import ContentClip from '../../../../assets/ContentClip.svg';

interface ContentSuccessAmbaProps {
  name?: string;
  telegram?: string;
  count?: string;
  content_last?: ContentItem[];
  handleOpenContentLink: () => void;
  handleOpenPhotoLink: () => void;
}

export default function ContentSuccessAmba({
  name,
  telegram,
  count,
  content_last,
  handleOpenContentLink,
  handleOpenPhotoLink
}: ContentSuccessAmbaProps) {
  return (
    <div className="card">
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
          {/* <ContentCount count={count} /> */}
        </div>
        <div className="card__text">
          {content_last?.map((contentItem, index) => (
            <React.Fragment key={index}>
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
                  {contentItem.link}
                </Typography>
              </div>
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
                  {contentItem.file}
                </Typography>
              </div>
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
