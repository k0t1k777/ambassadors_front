import '../InputText/InputText.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckDone from '../../assets/Checkbox.svg?react';
import Cancel from '../../assets/Close_mini.svg?react';
import { useState } from 'react';
interface InputTextProps {
  width?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  height?: string;
  setValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  margin?: string;
  resetInput: () => void;
  updateData: () => void;
}

export default function InputWithButtons({
  width,
  placeholder,
  label,
  value,
  setValue,
  height,
  margin,
  updateData,
  resetInput,
}: InputTextProps) {
  const [isSelect, setIsSelect] = useState(false);
  console.log(isSelect);
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: width,
          height: height,
          margin: '0',
        },
        '& .MuiInputBase-root': {
          m: 1,
          margin: '0',
          padding: '9px 0 9px 12px',
          cursor: 'pointer',
        },
        '& .MuiInputBase-input': {
          m: 1,
          padding: '0',
          margin: '0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        margin: margin,
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
      <p className='label'>{label}</p>
      <div className='input-text'>
        <TextField
          id='outlined-size-normal'
          onClick={() => setIsSelect(true)}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          InputProps={{
            style: {
              fontFamily: 'YSText',
              fontSize: '14px',
            },
          }}
        />
        {isSelect && (
          <div className='buttons'>
            <Cancel
              className='button'
              onClick={() => {
                resetInput(), setIsSelect(false);
              }}
            />
            <CheckDone
              className='button'
              onClick={() => {
                updateData(), setIsSelect(false);
              }}
            />
          </div>
        )}
      </div>
    </Box>
  );
}
