import { Typography } from '@mui/material';
import FilterSelectGrey from '../FilterSelectGrey/FilterSelectGrey';
import { PopupSendMerchData } from '../../utils/constants';
import InputText from '../InputText/InputText';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupSendMerch.css';

export default function PopupSendMerch() {
  return (
    <div className="popup-send__content">
      <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>
        {PopupSendMerchData.title}
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: '400', marginTop: '32px' }}>
        {PopupSendMerchData.name}
      </Typography>
      <div className="popup-send__adress">
        <Typography sx={{ fontSize: '16px', fontWeight: '400', marginRight: '5px' }}>
          {PopupSendMerchData.adress}/
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
          {PopupSendMerchData.index}
        </Typography>
      </div>
      <div className="popup-send__selects">
        <div className="popup-send__select">
          <FilterSelectGrey
            marginBottom="20px"
            width="320px"
            height="40px"
            label="Выберите мерч"
            fontSize="14px"
            defaultValue="Подсказка"
            options={['Толстовка', 'Кофе', 'Стикеры', 'Плюс', 'Клуб учащихся', 'Шопер']}
          />
          <InputText width="320px" label="Стоимость доставки" placeholder="редактировать" />
        </div>
        <div className="popup-send__select">
          <FilterSelectGrey
            width="178px"
            height="40px"
            label="Выберите размер"
            fontSize="14px"
            defaultValue="Подсказка"
            options={['XS', 'S', 'M', 'L', 'XL']}
          />
          <Typography
            sx={{ fontSize: '14px', color: '#797981', marginTop: '50px', marginLeft: '12px' }}
          >
            {PopupSendMerchData.cost}
          </Typography>
        </div>
      </div>
      <SubmitBtn width="250px" height="50px" title="Отправить" margin="0 0 0 191px" />
    </div>
  );
}
