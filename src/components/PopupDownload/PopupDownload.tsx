import { Typography } from '@mui/material';
import { PopupDownloadData } from '../../utils/constants';
import SubmitBtn from '../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../Btns/SubmitLightBtn/SubmitLightBtn';
import './PopupDownload.css';
import Popup from '../Popup/Popup';

interface PopupDownloadProps {
  open: boolean;
  handleClose: () => void;
}

export default function PopupDownload({ open, handleClose }: PopupDownloadProps) {
  const handleReturn = () => {
    console.log('btn close');
    handleClose();
  };

  const handleSend = () => {
    console.log('success download');
    handleClose();
  };

  return (
    <Popup open={open} handleClose={handleClose} width="386px" height="210px">
      <div className="popup-submit__content">
        <div className="popup-submit__text">
          <Typography
            sx={{ fontSize: '24px', fontWeight: '100', color: '#1A1B22', textAlign: 'center' }}
          >
            {PopupDownloadData.title}
          </Typography>
          <Typography
            sx={{ fontSize: '16px', fontWeight: '400', marginTop: '8px', color: '#797981' }}
          >
            {PopupDownloadData.check}
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
            onClick={handleReturn}
          />
          <SubmitBtn
            width="111px"
            height="40px"
            title="Выгрузить"
            fontSize="14px"
            onClick={handleSend}
          />
        </div>
      </div>
    </Popup>
  );
}
