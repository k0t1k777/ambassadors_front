import { Typography } from '@mui/material';
import { PopupCreateTaskData } from '../../utils/constants';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';
import InputPopupContentFields from '../InputPopupContentFields/InputPopupContentFields';
import ContentCount from '../Main/Content/ContentCount/ContentCount';
// import { ContentItem } from '../../types/types';
import { useState, useEffect } from 'react';

interface PublicationCard {
  linkValue: string;
  fileValue: string;
}

interface PopupCreateTaskProps {
  open: boolean;
  handleClose: () => void;
  count?: string;
  onSaveCount: (count: string) => void;
  linkCards: PublicationCard[];
  name?: string;
  course?: string;
}

export default function PopupCreateTask({
  open,
  handleClose,
  count,
  onSaveCount,
  linkCards,
  name,
  course
}: PopupCreateTaskProps) {
  const [countInk, setCountInk] = useState<string>(count || '0/4');
  const [initialCountInk, setInitialCountInk] = useState<string>(count || '');

  const handleIncrementCount = () => {
    const currentCount = parseInt(countInk.split('/')[0], 10);
    if (currentCount < 4) {
      setCountInk(`${currentCount + 1}/4`);
    }
  };

  const handleDecrementCount = () => {
    const currentCount = parseInt(countInk.split('/')[0], 10);
    if (currentCount > 0) {
      setCountInk(`${currentCount - 1}/4`);
    }
  };

  const handleSaveClick = () => {
    onSaveCount(countInk);
    setInitialCountInk(countInk);
    handleClose();
    console.log('save clicked');
  };

  const handleCancelClick = () => {
    setCountInk(initialCountInk);
    handleClose();
  };

  const numberOfComponents = 5;

  const componentsArray = [];
  for (let index = 0; index < numberOfComponents; index++) {
    componentsArray.push(
      <div key={index} style={{ marginTop: index > 0 ? '24px' : '0' }}>
        <InputPopupContentFields
          numberOfInputs={index + 1}
          incrementCount={handleIncrementCount}
          decrementCount={handleDecrementCount}
          linkValue={linkCards[index]?.linkValue || ''}
          fileValue={linkCards[index]?.fileValue || ''}
        />
      </div>
    );
  }

  useEffect(() => {
    if (open) {
      setInitialCountInk(count || '0/4');
    }
  }, [open, count]);

  return (
    <>
      {open && (
        <Popup
          handleClose={handleCancelClick}
          open={true}
          width="1068px"
          height="700px"
          top="20px"
          right="56px"
        >
          <div className="popup-create__content">
            <div className="popup-create__count">
              <Typography sx={{ fontSize: '24px', color: '#1A1B22', marginRight: '23px' }}>
                {name}
              </Typography>
              <ContentCount count={countInk} />
            </div>
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'YSText',
                color: '#797981',
                marginTop: '4px'
              }}
            >
              {course}
            </Typography>
            <Typography
              sx={{ fontSize: '11px', fontFamily: 'YSText', color: '#797981', marginTop: '28px' }}
            >
              {PopupCreateTaskData.message}
            </Typography>

            <div className="popup-create__selects">{componentsArray}</div>
            <div className="popup-create__btn ">
              <SubmitBtn
                width="110px"
                fontSize="14px"
                title="Сохранить"
                onClick={handleSaveClick}
              />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}
