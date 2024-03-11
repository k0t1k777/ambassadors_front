import { useState } from 'react';
import SearchIcon from '../../assets/SearchIcon.svg?react';
import './InputWithIconLoyality.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputWithIconData } from '../../utils/constants';

interface InputWithIconLoyalityProps {
  width?: string;
  placeholder?: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  margin?: string;
}

export default function InputWithIconLoyality({
  width,
  placeholder,
  value,
  setValue,
  error,
  margin
}: InputWithIconLoyalityProps) {
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
      <p className={`input__label-loyality  ${nameError ? 'input__text-error' : ''}`}>
        {InputWithIconData.AmbaName}
      </p>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            margin: '0 0 0 16px',
            width: { width },
            height: '40px',
            outline: 'none'
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
              border: '.5px solid #E0E3E7'
            },
            '&:hover fieldset': {
              border: '.5px solid #B2BAC2'
            },
            '&.Mui-focused fieldset': {
              border: '1px solid #797981'
            }
          },
          margin: margin
        }}
      >
        <SearchIcon className="input__search-icon" />
        <TextField
          id="outlined-size-normal"
          required
          placeholder={placeholder}
          value={value}
          onChange={handleNameChange}
          error={nameError}
          helperText={nameError ? 'Введите ФИО амбассадора' : ''}
          sx={{
            '& .MuiInputLabel-root.Mui-error': {
              color: '#ff0200'
            },
            '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
              border: '0.5px solid #ff0200'
            },
            '& .MuiFormHelperText-root.Mui-error': {
              color: '#ff0200'
            },
            margin: '0'
          }}
        />
      </Box>
    </div>
  );
}
