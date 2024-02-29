import { Typography } from '@mui/material';
import { PopupCreateTaskData } from '../../utils/constants';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';
import InputPopupContentFields from '../InputPopupContentFields/InputPopupContentFields';
import ContentCount from '../Main/Content/ContentCount/ContentCount';
import { useState } from 'react';

interface PopupCreateTaskProps {
  open: boolean;
  handleClose: () => void;
  count?: string;
}

export default function PopupCreateTask({ open, handleClose, count }: PopupCreateTaskProps) {
  const [countInk, setCountInk] = useState<string>(count || '0/4');

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

  const handleCancelClick = () => {
    handleClose();
    console.log('btn clicked');
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
        />
      </div>
    );
  }

  return (
    <div className="popup-create">
      {open && (
        <Popup
          open={true}
          handleClose={handleClose}
          width="1068px"
          height="700px"
          top="20px"
          right="56px"
        >
          <div className="popup-create__content">
            <div className="popup-create__count">
              <Typography sx={{ fontSize: '24px', color: '#1A1B22', marginRight: '23px' }}>
                {PopupCreateTaskData.name}
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
              {PopupCreateTaskData.direction}
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
                onClick={handleCancelClick}
              />
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}
