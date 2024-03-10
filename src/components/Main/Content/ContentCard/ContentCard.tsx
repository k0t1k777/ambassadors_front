import { useState, useEffect } from 'react';
import './ContentCard.css';
import PopupCreateTask from '../../../PopupCreateTask/PopupCreateTask';
import { CardCont, ContentItem } from '../../../../types/types';
import ContentNewAmba from '../ContentNewAmba/ContentNewAmba';
import ContentSortWindow from '../ContentSortWindow/ContentSortWindow';
import { ContentData } from '../../../../utils/constants';
import ContentInProgressAmba from '../ContentInProcessAmba/ContentInProcessAmba';
import ContentSuccessAmba from '../ContentSuccessAmba/ContentSuccessAmba';
import InfoTooltipDone from '../../../InfoTooltipDone/InfoTooltipDone';

interface PublicationCard {
  linkValue: string;
  fileValue: string;
}

interface ContentCardProps {
  cardsNew?: CardCont[];
  cardsInProgress?: CardCont[];
  cardsDone?: CardCont[];
  count?: string;
  content?: string;
  onClick?: () => void;
}

export default function ContentCard({
  cardsNew,
  cardsInProgress,
  cardsDone,
  onClick
}: ContentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkCards, setLinkCards] = useState<PublicationCard[]>([]);
  const [isContentLinkOpen, setIsContentLinkOpen] = useState(false);
  const [isPhotoLinkOpen, setIsPhotoLinkOpen] = useState(false);
  const [countCard, setCountCard] = useState<string>('0/4');
  const [userName, setUserName] = useState('');
  const [courseInfo, setCourseInfo] = useState('');
  const [infoTooltipIsOpen, setInfoTooltipIsOpen] = useState(false);

  const handleTooltipShow = () => {
    setInfoTooltipIsOpen(true);
    setTimeout(() => {
      setInfoTooltipIsOpen(false);
    }, 3000);
  };

  useEffect(() => {
    setCountCard(countCard || '0/4');
  }, [countCard]);
  const [selectCard, setSelectCard] = useState<any>();
  const handleOpen = (userContent: ContentItem[], userName: string, course: string, card: any) => {
    const publicationCount = `${userContent.length}/4`;
    const publicationCards: PublicationCard[] = userContent.map(item => ({
      linkValue: item.link || '',
      fileValue: item.file || ''
    }));
    setIsModalOpen(true);
    setLinkCards(publicationCards);
    setUserName(userName);
    setCourseInfo(course);
    setCountCard(publicationCount);
    setSelectCard(card);
  };

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
            onClick={() => handleOpen(card.content || [], card.name || '', card.course || '', card)}
            count={countCard}
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
            count={countCard}
            onClick={() => handleOpen(card.content || [], card.name || '', card.course || '', card)}
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
            count={countCard}
            content={card.content}
            onClick={() => handleOpen(card.content || [], card.name || '', card.course || '', card)}
            handleOpenContentLink={handleOpenContentLink}
            handleOpenPhotoLink={handleOpenPhotoLink}
          />
        ))}

      <PopupCreateTask
        open={isModalOpen}
        handleClose={handleClose}
        count={countCard}
        onSaveCount={updateCount}
        linkCards={linkCards}
        name={userName}
        course={courseInfo}
        onClick={onClick}
        card={selectCard}
        onSubmit={handleTooltipShow || (() => {})}
      />
      <InfoTooltipDone isVisible={infoTooltipIsOpen} messageTitle="Изменения внесены" />
    </>
  );
}
