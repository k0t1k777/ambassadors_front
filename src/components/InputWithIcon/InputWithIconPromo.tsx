import { useState } from 'react';
import SearchIcon from '../../assets/SearchIcon.svg?react';
import './InputWithIconPromo.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputWithIconProps {
  width?: string;
  placeholder?: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
}

export default function InputWithIconPromo({
  width,
  placeholder,
  value,
  setValue,
  error
}: InputWithIconProps) {
  const [nameError, setNameError] = useState(error);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  return (
    <div className="input">
      <p className={`input__label-promo ${nameError ? 'input__text-promo-error' : ''}`}>
        ФИО амбассадора
      </p>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            margin: '0',
            width: { width },
            height: '40px'
          },
          '& .MuiInputBase-root': {
            m: 1,
            margin: '0',
            padding: '9px 0 9px 44px',
            cursor: 'pointer'
          },
          '& .MuiInputBase-input': {
            m: 1,
            padding: '0',
            margin: '0',
            '&:focus': {
              border: '0'
            }
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E0E3E7'
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#797981',
              border: '1px solid'
            }
          }
        }}
      >
        <SearchIcon className="input__search-icon-promo" />
        <TextField
          id="outlined-size-normal"
          required
          placeholder={placeholder}
          value={value}
          onChange={handleNameChange}
          error={nameError}
          helperText={nameError ? 'Введите ФИО амбассадора' : ''}
          sx={{
            margin: '0'
          }}
        />
      </Box>
    </div>
  );
}
