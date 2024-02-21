import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../StatusButton/StatusButton.css';

function StatusButton() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };

    const color = age === '' ? 'rgb(135, 204, 158)' : age === 'Pause' ? 'rgb(255, 181, 91)' : age === 'NotAmbassador' ? 'rgb(239 75 73)' : 'rgb(127, 103, 210)';

    function CustomIcon() {
        return <svg
        width="14.000000"
        height="7.000000"
        viewBox="0 0 14 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <path id="Vector" d="M13.7069 0.285156C13.5193 0.103516 13.2648 0 12.9993 0C12.7339 0 12.4794 0.103516 12.2917 0.285156L7.70154 4.76172C7.51123 4.93945 7.25769 5.03906 6.9939 5.03906C6.73022 5.03906 6.47668 4.93945 6.28638 4.76172L1.69617 0.285156C1.50745 0.107422 1.25464 0.00976562 0.992188 0.0117188C0.729736 0.0136719 0.47876 0.117188 0.293213 0.296875C0.107544 0.478516 0.00231934 0.722656 0 0.978516C-0.00219727 1.23438 0.0986328 1.48242 0.281006 1.66602L4.87012 6.14258C5.14893 6.41406 5.47998 6.62891 5.84424 6.77734C6.20862 6.92383 6.59912 7 6.99341 7C7.38782 7 7.77832 6.92383 8.1427 6.77734C8.50696 6.62891 8.83801 6.41406 9.11682 6.14258L13.7069 1.66602C13.8945 1.48242 14 1.23438 14 0.976562C14 0.716797 13.8945 0.46875 13.7069 0.285156Z" fill={color} fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
    }
    
    return (
        <FormControl sx={{ m: 0, width: 187 }}>
        <Select
        sx={{ color: color, padding: '8px 12px', border: '1px solid ' + color, fontWeight: 400, fontSize: '14px', borderRadius: '4px', lineHeight: '20px'}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={ CustomIcon }
        >
          <MenuItem value="">Активный</MenuItem>
          <MenuItem value="NotAmbassador">Не амбассадор</MenuItem>
          <MenuItem value="Pause">На паузе</MenuItem>
          <MenuItem value="Confirmed">Уточняется</MenuItem>
        </Select>
      </FormControl>
    );
  }
  
  export default StatusButton;