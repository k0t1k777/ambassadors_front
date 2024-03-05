import { CardContent, Typography, CardMedia } from '@mui/material';
import { ContentItem } from '../../../../types/types';
import React from 'react';
import ContentClip from '../../../../assets/ContentClip.svg';
import './ContentSuccessAmba.css';

interface ContentSuccessAmbaProps {
  name?: string;
  telegram?: string;
  count?: string;
  content?: ContentItem[];
  handleOpenContentLink: (link: string) => void;
  handleOpenPhotoLink: (file: string) => void;
}

export default function ContentSuccessAmba({
  name,
  telegram,
  count,
  content,
  handleOpenContentLink,
  handleOpenPhotoLink
}: ContentSuccessAmbaProps) {
  return (
    <div className="card-success">
      <CardContent className="card-success__content" sx={{ padding: '0' }}>
        <div className="card-success__contents">
          <div className="card-success__user">
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
        <div className="card-success__text">
          {content?.map((contentItem, index) => (
            <React.Fragment key={index}>
              <div
                className="card-success__texts"
                onClick={() => handleOpenContentLink(contentItem.link)}
              >
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
              <div
                className="card-success__texts"
                onClick={() => handleOpenPhotoLink(contentItem.file)}
              >
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
