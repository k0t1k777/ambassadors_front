import { Typography } from '@mui/material';
import { useState } from 'react';
import { PopupCreateTaskData } from '../../utils/constants';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';
import InputPopupContentFields from '../InputPopupContentFields/InputPopupContentFields';
import ContentCount from '../Main/Content/ContentCount/ContentCount';

interface PopupCreateTaskProps {
  open: boolean;
  count?: string;
  handleClose: () => void;
}

export default function PopupCreateTask({ open, handleClose, count }: PopupCreateTaskProps) {
  const handleCancelClick = () => {
    handleClose();
    console.log('btn clicked');
  };

  const [inputPublicationValue, setInputPublicationValue] = useState('');
  const [inputLinkValue, setInputLinkValue] = useState('');
  const [isPublicationClicked, setIsPublicationClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleInputPublicationClick = () => {
    setIsPublicationClicked(true);
    console.log('open btns done and cancel');
  };

  const handleInputLinkClick = () => {
    setIsLinkClicked(true);
    console.log('open btns done and cancel');
  };

  const handleDonePublicationClick = () => {
    setIsPublicationClicked(false);
    console.log('Сохранение данных:', inputPublicationValue);
  };

  const handleCancelPublicationClick = () => {
    setIsPublicationClicked(false);
    console.log('Отмена');
  };

  const handleDoneLinkClick = () => {
    setIsLinkClicked(false);
    console.log('Сохранение данных:', inputLinkValue);
  };

  const handleCancelLinkClick = () => {
    setIsLinkClicked(false);
    console.log('Отмена');
  };

  const handlePublication = {
    done: handleDonePublicationClick,
    cancel: handleCancelPublicationClick
  };

  const handleLink = {
    done: handleDoneLinkClick,
    cancel: handleCancelLinkClick
  };

  const numberOfComponents = 5;

  const componentsArray = [];
  for (let index = 0; index < numberOfComponents; index++) {
    componentsArray.push(
      <div key={index} style={{ marginTop: index > 0 ? '24px' : '0' }}>
        <InputPopupContentFields
          isPublicationClicked={isPublicationClicked}
          inputPublicationValue={inputPublicationValue}
          setInputPublicationValue={setInputPublicationValue}
          handleInputPublicationClick={handleInputPublicationClick}
          handleDonePublicationClick={handlePublication.done}
          handleCancelPublicationClick={handlePublication.cancel}
          isLinkClicked={isLinkClicked}
          inputLinkValue={inputLinkValue}
          setInputLinkValue={setInputLinkValue}
          handleInputLinkClick={handleInputLinkClick}
          handleDoneLinkClick={handleLink.done}
          handleCancelLinkClick={handleLink.cancel}
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
              <ContentCount count={count} />
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
