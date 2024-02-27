import { Typography } from '@mui/material';

import { PopupCreateTaskData } from '../../utils/constants';
import InputText from '../InputText/InputText';
import InputDate from '../InputDate/InputDate';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import './PopupCreateTask.css';
import Popup from '../Popup/Popup';

interface PopupCreateTaskProps {
  open: boolean;
  handleClose: () => void;
}

export default function PopupCreateTask({ open, handleClose }: PopupCreateTaskProps) {
  const handleCancelClick = () => {
    handleClose();
    console.log('btn clicked');
  };

  return (
    <>
      {open && (
        <Popup open={true} handleClose={handleClose} width="712px" height="543px">
          <div className="popup-create__content">
            <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>
              {PopupCreateTaskData.name}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', marginTop: '32px' }}>
              {PopupCreateTaskData.direction}
            </Typography>
            <div className="popup-create__selects">
              <div className="popup-create__input">
                <InputText width="320px" label="Стоимость доставки" placeholder="редактировать" />
                <InputDate width="320px" label="Стоимость доставки" />
              </div>
              <div className="popup-create__input">
                <InputText width="320px" label="Стоимость доставки" placeholder="редактировать" />
                <InputDate width="320px" label="Стоимость доставки" />
              </div>
              <div className="popup-create__input">
                <InputText width="320px" label="Стоимость доставки" placeholder="редактировать" />
                <InputDate width="320px" label="Стоимость доставки" />
              </div>
            </div>
            <SubmitBtn width="250px" height="50px" title=" Сохранить" onClick={handleCancelClick} />
          </div>
        </Popup>
      )}
    </>
  );
}
