// import './InputDate.css';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
// import { useState } from 'react';
// import 'dayjs/locale/ru';
// import CalendarIcon from '../../assets/CalendarIcon.svg?react';
// import updateLocale from 'dayjs/plugin/updateLocale';

// export interface InputDateProps {
//   label?: string;
//   width?: string;
//   height?: string;
//   margin?: string;
// }

// export default function InputDate({ label, width, height, margin }: InputDateProps) {
//   dayjs.extend(updateLocale);
//   dayjs.updateLocale('ru', {
//     formats: { ll: 'D MMM YYYY' }
//   });
//   const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());

//   const handleChangeDate = (e: dayjs.Dayjs | null) => {
//     setValue(e);
//   };

//   return (
//     <div className="date">
//       <p className="date__label">{label}</p>
//       <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
//         <DemoContainer
//           components={['DatePicker']}
//           sx={{
//             '& button:focus': { outline: '0' },
//             '& .MuiStack-root': { overflow: 'hidden' },
//             '& .MuiInputBase-root': {
//               width: width,
//               height: { height },
//               flexDirection: 'row-reverse',
//               gap: '8px',
//               padding: '0 0 0 8px'
//             },
//             '& .MuiInputBase-input': {
//               minWidth: '80px',
//               height: '20px',
//               padding: '0 0 0 0',
//               fontSize: '14px',
//               fontWeight: '400',
//               lineHeight: '20px',
//               letterSpacing: '0em',
//               textAlign: 'left'
//             },
//             '& .MuiInputAdornment-root': {
//               width: '24px',
//               margin: '0'
//             },
//             '& .MuiInputAdornment-root:target': {
//               border: 'none'
//             },
//             '& .MuiButtonBase-root': {
//               width: '24px',
//               height: '24px',
//               padding: '0',
//               margin: '0',
//               borderRadius: '0',
//               border: '0'
//             },
//             '& .MuiButtonBase-root-MuiPickersDay-root .Mui-selected ': {
//               color: 'black',
//               backgroundColor: 'transparent'
//             },
//             margin: margin
//           }}
//         >
//           <DatePicker
//             format="ll"
//             value={value}
//             onChange={e => handleChangeDate(e)}
//             slots={{
//               openPickerIcon: CalendarIcon
//             }}
//           />
//         </DemoContainer>
//       </LocalizationProvider>
//     </div>
//   );
// }

import './InputDate.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import CalendarIcon from '../../assets/CalendarIcon.svg?react';
import updateLocale from 'dayjs/plugin/updateLocale';

export interface InputDateProps {
  label?: string;
  width?: string;
  height?: string;
  margin?: string;
  valueDate?: dayjs.Dayjs | null;
  setValueDate?: (value: dayjs.Dayjs | null) => void;
}

export default function InputDate({
  label,
  width,
  height,
  margin,
  valueDate,
  setValueDate
}: InputDateProps) {
  dayjs.extend(updateLocale);
  dayjs.updateLocale('ru', {
    formats: { ll: 'D MMM YYYY' }
  });

  const handleChangeDate = (evt: dayjs.Dayjs | null) => {
    if (setValueDate) {
      setValueDate(evt);
    }
  };

  return (
    <div className="date">
      <p className="date__label">{label}</p>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DemoContainer
          components={['DatePicker']}
          sx={{
            '&.MuiStack-root': {
              paddingTop: '0',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '(0, 0, 0, 0.87)',
            },
            '& button:focus': { outline: '0' },
            '& .MuiInputBase-root': {
              width: width,
              height: { height },
              flexDirection: 'row-reverse',
              gap: '8px',
              padding: '0 0 0 8px'
            },
            '& .MuiInputBase-input': {
              minWidth: '80px',
              height: '20px',
              padding: '0',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px',
              letterSpacing: '0em',
              textAlign: 'left',
              '&:hover': {
                border: '0',
              },
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
            margin: margin
          }}
        >
          <DatePicker
            format="ll"
            value={valueDate || dayjs()} //
            onChange={handleChangeDate}
            slots={{
              openPickerIcon: CalendarIcon
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
