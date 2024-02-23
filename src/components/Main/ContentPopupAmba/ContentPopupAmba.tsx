import { Modal, Box, Typography, Button } from '@mui/material';
import { ReactNode } from 'react';

interface ContentPopupAmbaProps {
  title?: string;
  children: ReactNode;
  open?: boolean;
  handleClose?: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function ContentPopupAmba({
  title,
  children,
  open,
  handleClose
}: ContentPopupAmbaProps) {
  return (
    <div>
      <Modal
        open={open || false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
          <Button onClick={handleClose}>Закрыть</Button>
        </Box>
      </Modal>
    </div>
  );
}
