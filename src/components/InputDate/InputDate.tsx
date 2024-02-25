import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import 'dayjs/locale/ru';
import CalendarIcon from '../../assets/CalendarIcon.svg?react';
import updateLocale from 'dayjs/plugin/updateLocale';

export default function InputDate() {
  dayjs.extend(updateLocale);
  dayjs.updateLocale('ru', {
    formats: { ll: 'D MMM YYYY' },
  });
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());

  const handleChangeDate = (e: dayjs.Dayjs | null) => {
    setValue(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
      <DemoContainer
        components={['DatePicker']}
        sx={{
          '& .MuiInputBase-root': {
            width: '148px',
            height: '40px',
            flexDirection: 'row-reverse',
            gap: '8px',
            padding: '0 0 0 8px',
          },
          '& .MuiInputBase-input': {
            minWidth: '80px',
            height: '20px',
            padding: '0 0 0 0',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'left',
          },
          '& .MuiInputAdornment-root': {
            width: '24px',
            margin: '0',
          },
          '& .MuiInputAdornment-root:target': {
            border: 'none',
          },
          '& .MuiButtonBase-root': {
            width: '24px',
            height: '24px',
            padding: '0',
            margin: '0',
            borderRadius: '0',
            border: '0',
          },
        }}
      >
        <DatePicker
          format='ll'
          value={value}
          onChange={(e) => handleChangeDate(e)}
          slots={{
            openPickerIcon: CalendarIcon,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
