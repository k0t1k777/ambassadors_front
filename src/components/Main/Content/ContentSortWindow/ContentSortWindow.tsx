import { Paper } from '@mui/material';
import { ReactNode } from 'react';

interface ContentSortWindowProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  children: ReactNode;
}

export default function ContentSortWindow({
  width,
  height,
  borderRadius,
  children
}: ContentSortWindowProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: '0.5px solid #B5B5B7',
        borderRadius: borderRadius ? borderRadius : '10px',
        width: width ? width : '415px',
        height: height ? height : '75px'
      }}
    >
      {children}
    </Paper>
  );
}
