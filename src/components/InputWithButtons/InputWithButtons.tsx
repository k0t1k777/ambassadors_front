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
  testpatch: any;
  resetInput: () => void;
}

export default function InputWithButtons({
  width,
  placeholder,
  label,
  value,
  setValue,
  height,
  margin,
  testpatch,
  resetInput,
}: InputTextProps) {
  const [isClicked, setIsClicked] = useState(false);
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
      }}
    >
      <div>
        <p className='label'>{label}</p>
        <div
          className='input'
          onClick={() => setIsClicked(true)}
        >
          <TextField
            id='outlined-size-normal'
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
          {isClicked && (
            <>
              <Cancel
                className='button'
                onClick={() => {
                  resetInput();
                }}
              />
              <CheckDone className='button' onClick={() => testpatch()} />
            </>
          )}
        </div>
      </div>
    </Box>
  );
}
