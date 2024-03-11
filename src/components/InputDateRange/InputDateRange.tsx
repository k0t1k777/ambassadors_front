import './InputDateRange.css';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LicenseInfo } from '@mui/x-date-pickers-pro';
import Calendar from '../../assets/CalendarIcon.svg?react';

LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);
export default function InputDateRange({ width, height, value, setValue }: any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DemoContainer
        components={['DateRangePicker']}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: '.5px solid #DDE0E4',
            top: '0'
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: '.5px solid #DDE0E4'
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '.5px solid #DDE0E4'
          },
          '&.MuiStack-root': {
            paddingTop: '0',
            position: 'relative',
            overflow: 'hidden',
            margin: '0'
          },
          '& .MuiStack-root': { marginTop: '10px' },

          '& button:focus': { outline: '0' },
          '& .MuiInputBase-root': {
            width: width,
            height: { height },
            flexDirection: 'row-reverse',
            gap: '8px',
            padding: '0 0 0 44px'
          },
          '& .MuiInputBase-input': {
            height: '20px',
            padding: '0',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'left',
            '&:hover': {
              border: '0'
            }
          },
          '& .MuiInputAdornment-root': {
            width: '24px',
            margin: '0'
          },
          '& .MuiInputAdornment-root:target': {
            border: 'none'
          },
          '& .MuiButtonBase-root': {
            width: '24px',
            height: '24px',
            padding: '0',
            margin: '0',
            borderRadius: '0',
            border: '0'
          },
          '& .MuiButtonBase-root-MuiPickersDay-root .Mui-selected ': {
            color: 'black',
            backgroundColor: 'transparent'
          },
          '& .MuiFormControl-root': {
            '& label': {
              display: 'none'
            }
          },
          '& legend': {
            display: 'none'
          },

          '& .MuiTypography-root': { display: 'none' }
        }}
      >
        <div className="labels">
          <p className="label">От</p>
          <p className="label">До</p>
        </div>
        <DemoItem component="DateRangePicker">
          <Calendar className="calendar" />
          <Calendar className="calendar-right" />
          <DateRangePicker format={'ll'} value={value} onChange={newValue => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
