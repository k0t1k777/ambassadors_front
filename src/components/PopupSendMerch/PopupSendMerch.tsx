import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { PopupSendMerchData } from '../../utils/constants';
import InputText from '../InputText/InputText';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupSendMerch.css';
import Popup from '../Popup/Popup';
import PopupSubmitSend from '../PopupSubmitSend/PopupSubmitSend';
import { Ambassador } from '../Main/DataAmbassador/DataAmbassador';
import * as Api from '../../utils/utils';
interface PopupSendMerchProps {
  open: boolean;
  handleClose: () => void;
  ambassador?: Ambassador;
}

export default function PopupSendMerch({
  open,
  handleClose,
  ambassador,
}: PopupSendMerchProps) {
  const [openSubmitPopup, setOpenSubmitPopup] = useState(false);

  const handleCancelClick = () => {
    handleClose();
    setOpenSubmitPopup(true);
    console.log('btn clicked');
  };

  const handleCancel = () => {
    handleClose();
    setOpenSubmitPopup(false);
    console.log('btn clicked');
  };
  console.log(ambassador);
  const [merchList, setMerchList] = useState<any[]>([]);
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState();
  const [merchValue, setMerchValue] = useState();

  useEffect(() => {
    Api.getDropdowns()
      .then((data) => setSizes(Object.values(data.clothing_size)))
      Api.getDropdowns().then((data) => setMerchList(data.merch.map((item) => item.title)))
  }, []);
  console.log(merchList);
  return (
    <>
      {open && (
        <Popup
          open={true}
          handleClose={handleClose}
          width='712px'
          height='543px'
        >
          <div className='popup-send__content'>
            <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>
              {PopupSendMerchData.title}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', fontWeight: '400', marginTop: '32px' }}
            >
              {ambassador?.name}
            </Typography>
            <div className='popup-send__adress'>
              <Typography
                sx={{ fontSize: '16px', fontWeight: '400', marginRight: '5px' }}
              >
                {ambassador?.address}
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
                {ambassador?.index}
              </Typography>
            </div>
            <div className='popup-send__selects'>
              <div className='popup-send__select'>
                <FilterSelectGrey
                  marginBottom='20px'
                  width='320px'
                  height='40px'
                  label='Выберите мерч'
                  placeholder='Выберите мерч'
                  fontSize='14px'
                  defaultValue='Подсказка'
                  options={merchList}
                />
                <InputText
                  width='320px'
                  height='40px'
                  label='Стоимость доставки'
                  placeholder='редактировать'
                />
              </div>
              <div className='popup-send__select'>
                <FilterSelectGrey
                  width='178px'
                  height='40px'
                  label='Выберите размер'
                  placeholder='Выберите размер'
                  fontSize='14px'
                  defaultValue='Подсказка'
                  options={sizes}
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#797981',
                    marginTop: '50px',
                    marginLeft: '12px',
                  }}
                >
                  {PopupSendMerchData.cost}
                </Typography>
              </div>
            </div>
            <SubmitBtn
              width='250px'
              height='50px'
              title='Отправить'
              margin='0 0 0 191px'
              onClick={handleCancelClick}
            />
          </div>
        </Popup>
      )}
      <PopupSubmitSend open={openSubmitPopup} handleClose={handleCancel} />
    </>
  );
}
