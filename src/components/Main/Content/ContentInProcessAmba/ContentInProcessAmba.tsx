import './ContentInProcessAmba.css';
// import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
// import ContentCard from '../ContentCard/ContentCard';
// import { ContentData } from '../../../../utils/constants';
import { CardContent, Typography, CardMedia } from '@mui/material';
import { ContentItem } from '../../../../types/types';
import React from 'react';
import ContentClip from '../../../../assets/ContentClip.svg';

// export default function ContentInProcessAmba() {
//   return (
//     <>
//       <ContentSortWindow width="1286px">
//         <p className="content__title__process">{ContentData.inProcess}</p>
//       </ContentSortWindow>
//       <div className="content__cards__container">
//         <ContentCard
//           height="126px"
//           linkContent="Ссылка на контент"
//           linkPhoto="Ссылка на фото"
//           count="2/4"
//         />

//       </div>
//     </>
//   );
// }
interface ContentInProgressAmbaProps {
  name?: string;
  telegram?: string;
  count?: string;
  content?: ContentItem[] | undefined;
  handleOpenContentLink: () => void;
  handleOpenPhotoLink: () => void;
}

export default function ContentInProgressAmba({
  name,
  telegram,
  count,
  content,
  handleOpenContentLink,
  handleOpenPhotoLink
}: ContentInProgressAmbaProps) {
  console.log(content);
  return (
    <div className="card-inprogress">
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
          {/* <ContentCount count={count} /> */}
        </div>
        <div className="card-inprogress__text">
          {content?.map((contentItem, index) => (
            <React.Fragment key={index}>
              <div className="card-inprogress__texts" onClick={handleOpenContentLink}>
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
              <div className="card-inprogress__texts" onClick={handleOpenPhotoLink}>
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
