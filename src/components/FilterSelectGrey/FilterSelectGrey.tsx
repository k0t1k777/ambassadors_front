import './FilterSelectGrey.css';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import StatusArrowGrey from '../../assets/StatusArrowGrey.svg';
import './FilterSelectGrey.css';

interface FilterSelectGreyProps {
  onChange?: (value: string) => void;
  width?: string;
  height?: string;
  label?: string;
  options?: (string | number)[];
  fontSize?: string;
  marginBottom?: string;
  placeholder?: string;
  margin?: string;
  valueSelectFilter?: string;
  setValueSelectFilter?: (value: string) => void;
  error?: boolean;
  onBlur?: any;
}

// const schema = yup.object().shape({
//   valueSelectFilter: yup.string().required('Выберите из списка'),
// });

export default function FilterSelectGrey({
  onChange,
  width,
  height,
  label,
  options = [],
  fontSize,
  placeholder,
  margin,
  valueSelectFilter,
  setValueSelectFilter,
  onBlur,
}: FilterSelectGreyProps) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const handleChange = (evt: SelectChangeEvent<string>) => {
    const value = evt.target.value;
    if (onChange) {
      onChange(value);
    }
    if (setValueSelectFilter) {
      setValueSelectFilter(value);
    }
  };

  const toggleSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <div className='select'>
      <p className='select__label'>{label}</p>

      <FormControl
        error
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: 'none',
          },
          '& .MuiSelect-root': {
            marginTop: '0',
          },
          '& label.Mui-focused': {
            color: '#F1F6FF',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#F1F6FF',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#F1F6FF',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#F1F6FF',
            },
            '&:hover fieldset': {
              borderColor: '#F1F6FF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F1F6FF',
            },
          },
        }}
      >
        <Select
          onBlur={onBlur}
          value={valueSelectFilter || ''}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) =>
            selected ? String(selected) : placeholder
          }
          inputProps={{ 'aria-label': 'Select option' }}
          IconComponent={() => null}
          onClose={() => setIsOpenSelect(false)}
          onClick={toggleSelect}
          open={isOpenSelect}
          endAdornment={
            <img
              src={StatusArrowGrey}
              alt='Arrow icon'
              onClick={toggleSelect}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)',
              }}
            />
          }
          sx={{
            padding: '0',
            border: '1px solid #DDE0E4',
            color: '#797981',
            width: width ? width : '184px',
            height: height ? height : '50px',
            marginTop: '4px',
            fontSize: fontSize,
            margin: margin,
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {/* {error && (
          <FormHelperText sx={{ color: '#ff0200', marginLeft: '1px' }}>
            Выберите из списка
          </FormHelperText>
        )} */}
      </FormControl>
    </div>
  );
}
