import { Modal, Box } from '@mui/material';
import { ReactNode } from 'react';
import './Popup.css';

interface PopupProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  children?: ReactNode;
}

export default function Popup({ open, handleClose, width, height, children }: PopupProps) {
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
        {children}
      </Box>
    </Modal>
  );
}
