import { Modal, Box } from '@mui/material';
import { ReactNode } from 'react';
import './Popup.css';
import PopupCancel from '../../assets/PopupCancel.svg?react';

interface PopupProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  children?: ReactNode;
  right?: string;
  top?: string;
}

export default function Popup({
  open,
  handleClose,
  width,
  height,
  children,
  right,
  top
}: PopupProps) {
  return (
    <Modal
      open={open || false}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="content__popup"
        sx={{
          fontSize: '18px',
          width: width,
          height: height,
          border: 'none',
          '&:focus': {
            outline: 'none'
          }
        }}
      >
        <PopupCancel
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: top ? top : '17px',
            right: right ? right : '17px',
            cursor: 'pointer'
          }}
        />

        {children}
      </Box>
    </Modal>
  );
}
