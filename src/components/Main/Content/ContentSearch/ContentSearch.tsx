import './ContentSearch.css';
import SearchIcon from '../../../../assets/SearchIcon.svg?react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export interface ContentSearchProps {
  width?: string;
  placeholder?: string;
  label?: string;
  margin?: string;
  valueSearch?: string;
  setValueSearch?: (value: string) => void;
}

export default function ContentSearch({
  width,
  placeholder,
  label,
  margin,
  valueSearch,
  setValueSearch
}: ContentSearchProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (setValueSearch) {
      setValueSearch(evt.target.value);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        position: 'relative',
        '& .MuiTextField-root': {
          width: { width },
          height: '40px'
        },
        '& .MuiInputBase-root': {
          margin: '0',
          padding: '9px 0 9px 44px'
        },
        '& .MuiInputBase-input': {
          padding: '0',
          margin: '0'
        },
        margin: margin
      }}
    >
      <p className="content__search-label">{label}</p>
      <SearchIcon className="content__search-icon" />
      <div>
        <TextField
          id="outlined-size-normal"
          placeholder={placeholder}
          value={valueSearch}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
