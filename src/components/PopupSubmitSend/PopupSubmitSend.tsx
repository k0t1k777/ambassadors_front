import { Typography } from '@mui/material';
import { PopupSubmitSendData } from '../../utils/constants';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../Btns/SubmitLightBtn/SubmitLightBtn';
import './PopupSubmitSend.css';
import Popup from '../Popup/Popup';

interface PopupSubmitSendProps {
  open: boolean;
  handleClose: () => void;
  handleReturn?: () => void;
  onSubmit?: () => void;
  onClick?: () => void;
}

export default function PopupSubmitSend({
  open,
  handleClose,
  handleReturn,
  onSubmit,
  onClick
}: PopupSubmitSendProps) {
  const handleReturnClick = () => {
    if (handleReturn) {
      handleReturn();
    }
  };

  const handleSend = () => {
    if (onSubmit) {
      onSubmit();
    }
    handleClose();
    if (onClick) {
      onClick();
    }
  };

  return (
    <Popup open={open} handleClose={handleClose} width="386px" height="210px">
      <div className="popup-submit__content">
        <div className="popup-submit__text">
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '100',
              color: '#1A1B22',
              textAlign: 'center',
              fontFamily: 'ySText'
            }}
          >
            {PopupSubmitSendData.title}
          </Typography>
          <Typography
            sx={{ fontSize: '16px', fontWeight: '400', marginTop: '8px', color: '#797981' }}
          >
            {PopupSubmitSendData.check}
          </Typography>
        </div>
        <div className="popup-submit__btn">
          <SubmitLightBtn
            width="182px"
            height="40px"
            title="Вернуться проверить"
            margin="0 12px 0 0 "
            color="#23272E"
            fontSize="14px"
            onClick={handleReturnClick}
          />
          <SubmitBtn
            width="111px"
            height="40px"
            title="Отправить"
            fontSize="14px"
            onClick={handleSend}
          />
        </div>
      </div>
    </Popup>
  );
}
