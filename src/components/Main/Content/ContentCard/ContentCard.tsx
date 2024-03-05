import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import './ContentCard.css';
import ContentCount from '../../Content/ContentCount/ContentCount';
import ContentClip from '../../../../assets/ContentClip.svg';
import PopupCreateTask from '../../../PopupCreateTask/PopupCreateTask';
import { CardCont, ContentItem } from '../../../../types/types';
import ContentNewAmba from '../ContentNewAmba/ContentNewAmba';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import { ContentData } from '../../../../utils/constants';
import ContentInProgressAmba from '../ContentInProcessAmba/ContentInProcessAmba';
import ContentSuccessAmba from '../ContentSuccessAmba/ContentSuccessAmba';

interface ContentCardProps {
  cardsNew?: CardCont[];
  cardsInProgress?: CardCont[];
  cardsDone?: CardCont[];
  count?: string;
}

export default function ContentCard({
  cardsNew,
  cardsInProgress,
  cardsDone,
  count
}: ContentCardProps) {
  // console.log(Object.keys(cards));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentLinkOpen, setIsContentLinkOpen] = useState(false);
  const [isPhotoLinkOpen, setIsPhotoLinkOpen] = useState(false);
  const [countCard, setCountCard] = useState(count || '0/4');
  const [selectedPublication, setSelectedPublication] = useState<ContentItem | null>(null);

  const handleOpen = (publication: ContentItem) => {
    setSelectedPublication(publication);
    setIsModalOpen(true);
  };

  // const handleOpen = () => {
  //   if (!isContentLinkOpen && !isPhotoLinkOpen) {
  //     setIsModalOpen(true);
  //   }
  // };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenContentLink = (link: string) => {
    setIsContentLinkOpen(true);
    window.open(link, '_blank');
  };

  const handleOpenPhotoLink = (file: string) => {
    setIsPhotoLinkOpen(true);
    window.open(file, '_blank');
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
            onClick={handleOpen}
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
            onClick={handleOpen}
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
          <ContentSuccessAmba
            key={index}
            name={card.name}
            telegram={card.telegram}
            // count={countCard}
            content={card.content}
            onClick={handleOpen}
            handleOpenContentLink={handleOpenContentLink}
            handleOpenPhotoLink={handleOpenPhotoLink}
          />
        ))}

      <PopupCreateTask
        open={isModalOpen}
        handleClose={handleClose}
        count={count}
        onSaveCount={updateCount}
        publication={selectedPublication}
        link={selectedPublication?.link}
        file={selectedPublication?.file}
      />
    </>
  );
}
