import { Typography } from '@mui/material';
import { useState } from 'react';
import { PopupCreateTaskData } from '../../utils/constants';
import InputText from '../InputText/InputText';
import InputDate from '../InputDate/InputDate';
import InputChecked from '../InputChecked/InputChecked';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';
import CheckDone from '../../assets/Checkbox.svg?react';
import Cancel from '../../assets/Close_mini.svg?react';

interface PopupCreateTaskProps {
  open: boolean;
  handleClose: () => void;
}

export default function PopupCreateTask({ open, handleClose }: PopupCreateTaskProps) {
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

  return (
    <div className="popup-create">
      {open && (
        <Popup open={true} handleClose={handleClose} width="1068px" height="535px">
          <div className="popup-create__content">
            <Typography sx={{ fontSize: '24px', color: '#1A1B22' }}>
              {PopupCreateTaskData.name}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', fontFamily: 'YSText', color: '#797981', marginTop: '4px' }}
            >
              {PopupCreateTaskData.direction}
            </Typography>
            <Typography
              sx={{ fontSize: '11px', fontFamily: 'YSText', color: '#797981', marginTop: '28px' }}
            >
              {PopupCreateTaskData.message}
            </Typography>
            <div className="popup-create__selects">
              <div className="popup-create__input">
                <div className="popup-input__container ">
                  <div className="popup-create__container popup-create__checkbox">
                    <InputChecked />
                  </div>
                  <InputText
                    label="Публикация 1"
                    width={isPublicationClicked ? '247px' : '273px'}
                    margin={!isPublicationClicked ? '0 66px 0 0' : '0'}
                    placeholder="Вставьте ссылку"
                    value={inputPublicationValue}
                    setValue={setInputPublicationValue}
                    onClick={handleInputPublicationClick}
                  />

                  {isPublicationClicked && (
                    <div className="popup-create__container popup-create__icon ">
                      <Cancel
                        className="popup-create__check-done"
                        onClick={handleCancelPublicationClick}
                      />
                      <CheckDone
                        className="popup-create__check-done"
                        onClick={handleDonePublicationClick}
                      />
                    </div>
                  )}
                </div>
                <div className="popup-input__container ">
                  <InputText
                    label="Ссылка на файл"
                    width={isLinkClicked ? '247px' : '273px'}
                    margin={!isLinkClicked ? '0 66px 0 0' : '0'}
                    placeholder="Вставьте ссылку"
                    value={inputLinkValue}
                    setValue={setInputLinkValue}
                    onClick={handleInputLinkClick}
                  />

                  {isLinkClicked && (
                    <div className="popup-create__container popup-create__icon ">
                      <Cancel
                        className="popup-create__check-done"
                        onClick={handleCancelLinkClick}
                      />
                      <CheckDone
                        className="popup-create__check-done"
                        onClick={handleDoneLinkClick}
                      />
                    </div>
                  )}
                </div>
                <InputDate width="234px" height="40px" label="Дата" />
              </div>
              <Typography
                // onClick={}
                sx={{
                  fontSize: '13px',
                  fontFamily: 'YSText',
                  color: '#23272E',
                  marginTop: '20px',
                  marginLeft: '36px',
                  cursor: 'pointer'
                }}
              >
                {PopupCreateTaskData.more}
              </Typography>
            </div>
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
