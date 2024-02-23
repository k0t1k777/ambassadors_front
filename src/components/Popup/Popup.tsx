import './Popup.css';
import { Modal, Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PopupProps {
  title?: string;
  children: ReactNode;
  open?: boolean;
  handleClose?: () => void;
  width: string;
  height: string;
}

export default function Popup({ title, children, open, handleClose, width, height }: PopupProps) {
  return (
    <div>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
