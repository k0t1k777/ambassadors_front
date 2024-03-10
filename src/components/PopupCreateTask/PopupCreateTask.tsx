import { Typography } from '@mui/material';
import { PopupCreateTaskData } from '../../utils/constants';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';
import InputPopupContentFields from '../InputPopupContentFields/InputPopupContentFields';
import ContentCount from '../Main/Content/ContentCount/ContentCount';
import { useState, useEffect } from 'react';
import * as Api from '../../utils/utils';

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
  fileValue?: string;
  linkValue?: string;
  onClick?: () => void;
  cardId?: any;
  card?: any;
}

export default function PopupCreateTask({
  open,
  handleClose,
  count,
  onSaveCount,
  linkCards,
  name,
  course,
  card,
}: // cardId
PopupCreateTaskProps) {
  const [countPopup, setCountPopup] = useState(`${count}/4`);
  useEffect(() => {
    if (count) {
      setCountPopup(count);
    }
  }, [count]);

  const incrementCount = () => {
    const [current, max] = countPopup.split('/').map(Number);
    const newCount = Math.min(current + 1, max);
    const updatedCount = `${newCount}/${max}`;
    setCountPopup(updatedCount);
    onSaveCount(updatedCount);
  };

  const decrementCount = () => {
    const [current, max] = countPopup.split('/').map(Number);
    const newCount = Math.max(current - 1, 0);
    const updatedCount = `${newCount}/${max}`;
    setCountPopup(updatedCount);
    onSaveCount(updatedCount);
  };

  const handleSaveClick = () => {
    // onClick();
    // onSaveCount();
    Api.addNewContent({
      link: linkValue,
      file: fileValue,
      guide: true,
      ambassador: card.id,
    });
    handleClose();
    console.log('save clicked');
  };

  const handleCancelClick = () => {
    handleClose();
  };

  const [fileValue, setFileValue] = useState<string>();
  const [linkValue, setLinkValue] = useState<string>();

  console.log(linkValue, fileValue);

  const numberOfComponents = 5;
  const componentsArray = [];
  for (let index = 0; index < numberOfComponents; index++) {
    componentsArray.push(
      <div key={index} style={{ marginTop: index > 0 ? '24px' : '0' }}>
        <InputPopupContentFields
          numberOfInputs={index + 1}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          linkValue={linkCards[index]?.linkValue || linkValue}
          fileValue={linkCards[index]?.fileValue || fileValue}
          setLinkValue={setLinkValue}
          setFileValue={setFileValue}

          // updateData={() => handleUpdateLink() || handleUpdateFile()}
        />
      </div>
    );
  }

  return (
    <>
      {open && (
        <Popup
          handleClose={handleCancelClick}
          open={true}
          width='1068px'
          height='700px'
          top='20px'
          right='56px'
        >
          <div className='popup-create__content'>
            <div className='popup-create__count'>
              <Typography
                sx={{ fontSize: '24px', color: '#1A1B22', marginRight: '23px' }}
              >
                {name}
              </Typography>
              <ContentCount count={count} />
            </div>
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'YSText',
                color: '#797981',
                marginTop: '4px',
              }}
            >
              {course}
            </Typography>
            <Typography
              sx={{
                fontSize: '11px',
                fontFamily: 'YSText',
                color: '#797981',
                marginTop: '28px',
              }}
            >
              {PopupCreateTaskData.message}
            </Typography>

            <div className='popup-create__selects'>{componentsArray}</div>
            <div className='popup-create__btn '>
              <SubmitBtn
                width='110px'
                fontSize='14px'
                title='Сохранить'
                onClick={handleSaveClick}
              />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}
