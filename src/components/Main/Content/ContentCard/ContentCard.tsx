import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './ContentCard.css';
import ContentCount from '../../Content/ContentCount/ContentCount';
import ContentClip from '../../../../assets/ContentClip.svg';
import PopupCreateTask from '../../../PopupCreateTask/PopupCreateTask';
import { CardCont } from '../../../../types/types';
import ContentNewAmba from '../ContentNewAmba/ContentNewAmba';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import { ContentData } from '../../../../utils/constants';
import ContentInProgressAmba from '../ContentInProcessAmba/ContentInProcessAmba';

interface ContentCardProps {
  cardsNew?: CardCont[];
  cardsInProgress?: CardCont[]; // Массив
  cardsDone?: CardCont[];
  count?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export default function ContentCard({
  cardsNew,
  cardsInProgress,
  cardsDone,
  count,
  width,
  height,
  borderRadius
}: ContentCardProps) {
  // console.log(Object.keys(cards));

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
    // window.open(linkContent, '_blank');
  };

  const handleOpenPhotoLink = () => {
    setIsPhotoLinkOpen(true);
    // window.open(linkContent, '_blank');
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
      {cardsNew && (
          <ContentSortWindow width="700">
            <p className="content__title__new">{ContentData.new}</p>
          </ContentSortWindow>
        ) &&
        cardsNew.map((card, index) => (
          <ContentNewAmba
            key={index}
            name={card.name}
            telegram={card.telegram}
            // count={countCard}
          />
        ))}
      {cardsInProgress && (
          <ContentSortWindow width="700">
            <p className="content__title__new">{ContentData.inProcess}</p>
          </ContentSortWindow>
        ) &&
        cardsInProgress.map((card, index) => (
          <ContentInProgressAmba
            key={index}
            name={card.name}
            telegram={card.telegram}
            // count={countCard}
            content={card.content}
            handleOpenContentLink={handleOpenContentLink}
            handleOpenPhotoLink={handleOpenPhotoLink}
          />
        ))}

      {cardsDone && (
          <ContentSortWindow width="700">
            <p className="content__title__new">{ContentData.done}</p>
          </ContentSortWindow>
        ) &&
        cardsDone.map((card, index) => (
          <ContentInProgressAmba
            key={index}
            name={card.name}
            telegram={card.telegram}
            // count={countCard}
            content={card.content}
            handleOpenContentLink={handleOpenContentLink}
            handleOpenPhotoLink={handleOpenPhotoLink}
          />
        ))}

      {/* {cardsNew &&
        cardsNew.map((card, index) => (
          <div key={index} className="card">
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
                    {card.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'YSText',
                      fontSize: '13px',
                      color: '#797981'
                    }}
                  >
                    {card.telegram}
                  </Typography>
                </div>
                <ContentCount count={countCard} />
              </div>
            </CardContent>
          </div>
        ))} */}

      {/* {cardsInProgress &&
        cardsInProgress.map((card, index) => (
          <div key={index} className="card">
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
                    {card.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'YSText',
                      fontSize: '13px',
                      color: '#797981'
                    }}
                  >
                    {card.telegram}
                  </Typography>
                </div>
                <ContentCount count={countCard} />
              </div>
              <div className="card__text">
                {card.content?.map((contentItem, index) => (
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
        ))} */}
      {/* {cardsDone &&
        cardsDone.map((card, index) => (
          <div key={index} className="card">
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
                    {card.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'YSText',
                      fontSize: '13px',
                      color: '#797981'
                    }}
                  >
                    {card.telegram}
                  </Typography>
                </div>
                <ContentCount count={countCard} />
              </div>
              <div className="card__text">
                {card.content?.map((contentItem, index) => (
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
        ))} */}
      <PopupCreateTask
        open={isModalOpen}
        handleClose={handleClose}
        count={count}
        onSaveCount={updateCount}
      />
    </>
  );
}
