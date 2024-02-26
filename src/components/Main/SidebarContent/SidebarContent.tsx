import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import './SidebarContent.css';

interface SidebarContentProps {
  value?: string;
  img?: string;
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function SidebarContent({
  value,
  img,
  text,
  isActive,
  onClick
}: SidebarContentProps) {
  return (
    <MenuItem
      selected={isActive}
      onClick={onClick}
      value={value}
      style={{
        color: isActive ? '#000' : '#fff',
        backgroundColor: isActive ? '#fff' : '#1A1B22',
        display: 'flex',
        flexDirection: 'column',
        height: '72px'
      }}
    >
      <ListItemIcon>
        <img src={img} alt="Icon" />
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{
          fontSize: '11px',
          fontWeight: '500',
          color: isActive ? '#000' : '#fff',
          fontFamily: 'inherit'
        }}
      />
    </MenuItem>
  );
}
