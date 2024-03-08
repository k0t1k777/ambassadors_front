import SearchIcon from '../../assets/SearchIcon.svg?react';
import './InputWithIconPromo.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputWithIconProps {
  width?: string;
  placeholder?: string;
  value: string;
  setValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function InputWithIconPromo({
  width,
  placeholder,
  value,
  setValue,
}: InputWithIconProps) {
  //console.log(value);
  return (
    <div className='input'>
      <p className='input__label-promo'>ФИО амбассадора</p>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            margin: '0',
            width: { width },
            height: '40px',
          },
          '& .MuiInputBase-root': {
            m: 1,
            margin: '0',
            padding: '9px 0 9px 44px',
            cursor: 'pointer',
          },
          '& .MuiInputBase-input': {
            m: 1,
            padding: '0',
            margin: '0',
            '&:focus': {
              border: '0',
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#797981',
              border: '1px solid',
            },
          },
        }}
      >
        <SearchIcon className='input__search-icon-promo' />
        <TextField
          id='outlined-size-normal'
          placeholder={placeholder}
          value={value}
          onChange={setValue}
        />
      </Box>
    </div>
  );
}
