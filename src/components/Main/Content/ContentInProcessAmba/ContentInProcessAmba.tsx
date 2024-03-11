import './ContentInProcessAmba.css';
// import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
// import ContentCard from '../ContentCard/ContentCard';
import { CardContent, Typography, CardMedia } from '@mui/material';
import { ContentItem } from '../../../../types/types';
import { cardContentData } from '../../../../utils/constants';
import ContentClip from '../../../../assets/ContentClip.svg';
import ContentCount from '../ContentCount/ContentCount';

interface ContentInProgressAmbaProps {
  name?: string;
  telegram?: string;
  count?: string;
  content?: ContentItem[] | undefined;
  handleOpenContentLink: (link: string) => void;
  handleOpenPhotoLink: (file: string) => void;
  onClick?: () => void;
}

export default function ContentInProgressAmba({
  name,
  telegram,
  content,
  handleOpenContentLink,
  handleOpenPhotoLink,
  onClick
}: ContentInProgressAmbaProps) {
  const handleClick = () => {
    onClick && onClick();
  };

  const publicationCount = `${content ? content.length : 0}/4`;

  const latestContentItem = content ? content[0] : null;

  return (
    <div className="card-inprogress" onClick={handleClick}>
      <CardContent className="card-inprogress__content" sx={{ padding: '0' }}>
        <div className="card-inprogress__contents">
          <div className="card-inprogress__user">
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
          <ContentCount count={publicationCount} />
        </div>
        <div className="card-inprogress__text">
          {latestContentItem && (
            <>
              <div
                className="card-inprogress__texts"
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
                className="card-inprogress__texts"
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
