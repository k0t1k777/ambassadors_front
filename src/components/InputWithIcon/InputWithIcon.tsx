import SearchIcon from '../../assets/SearchIcon.svg?react';
import './InputWithIcon.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputWithIconProps {
  width?: string;
  placeholder?: string
}

export default function InputWithIcon({ width, placeholder }: InputWithIconProps) {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          margin: '32px 0 0 16px',
          width: {width},
          height: '40px',
        },
        '& .MuiInputBase-root': {
          m: 1,
          margin: '0',
          padding: '9px 0 9px 44px',
        },
        '& .MuiInputBase-input': {
          m: 1,
          padding: '0',
          margin: '0',
        },
      }}
    >
      <SearchIcon className='input__search-icon' />
      <div>
        <TextField id='outlined-size-normal' placeholder={placeholder} />
      </div>
    </Box>
  );
}
