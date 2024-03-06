import { CardContent, Typography, CardMedia } from '@mui/material';
import { ContentItem } from '../../../../types/types';
import ContentClip from '../../../../assets/ContentClip.svg';
import './ContentSuccessAmba.css';
import { cardContentData } from '../../../../utils/constants';
import ContentCount from '../ContentCount/ContentCount';

interface ContentSuccessAmbaProps {
  name?: string;
  telegram?: string;
  count?: string;
  content?: ContentItem[];
  onClick?: () => void;
  handleOpenContentLink: (link: string) => void;
  handleOpenPhotoLink: (file: string) => void;
}

export default function ContentSuccessAmba({
  name,
  telegram,
  count,
  content,
  onClick,
  handleOpenContentLink,
  handleOpenPhotoLink
}: ContentSuccessAmbaProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  const latestContentItem = content ? content[0] : null;

  return (
    <div className="card-success" onClick={handleClick}>
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
          <ContentCount count={count} />
        </div>
        <div className="card-success__text">
          {latestContentItem && (
            <>
              <div
                className="card-success__texts"
                onClick={() => handleOpenContentLink(latestContentItem.link)}
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
                  {latestContentItem.link ? latestContentItem.link : cardContentData.link}
                </Typography>
              </div>

              <div
                className="card-success__texts"
                onClick={() => handleOpenPhotoLink(latestContentItem.file)}
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
