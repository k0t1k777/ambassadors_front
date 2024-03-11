import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PageArrowLeft from '../../../assets/PageArrow.svg';
import PageArrowRight from '../../../assets/PageArrowRight.svg';

interface PaginationBtnProps {
  btn?: string | number | null;
  pagination: number;
  setPage: any;
  page: any;
}

export default function PaginationBtn({
  pagination,
  setPage,
}: PaginationBtnProps) {
  const [selectedBtn, setSelectedBtn] = useState<any>({
    btn: 1,
  });

  const handleBtnClick = (value: string | number | null) => {
    setSelectedBtn((prevState:any) => ({
      ...prevState,
      btn: prevState.btn === value ? null : value,
    }));
  };

  const buttons: any = [];

  for (let i = 1; i <= +Math.ceil(pagination / 8); i++) {
    buttons.push(i);
  }

  console.log(buttons);

  const btnStyle = {
    width: '32px',
    height: '32px',
    marginRight: '8px',
    border: '1px solid #B5B5B7',
    borderRadius: '8px',
    color: 'black',
    backgroundColor: 'transparent',
  };

  const btnStyleImg = {
    ...btnStyle,
    border: 'none',
    backgroundColor: '#DDE0E4',
  };

  const btnStyleSelected = {
    ...btnStyle,
    color: '#fff',
    backgroundColor: '#23272E',
  };

  return (
    <ToggleButtonGroup exclusive aria-label='page__nav'>
      <ToggleButton
        value='<'
        onClick={() => handleBtnClick('<')}
        style={btnStyleImg}
        sx={{
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <img src={PageArrowLeft} alt='Previous page' />
      </ToggleButton>

      {buttons.map((value:any) => (
        <ToggleButton
          key={value}
          value={value}
          onClick={() => {
            handleBtnClick(value), setPage(value);
          }}
          style={selectedBtn.btn === value ? btnStyleSelected : btnStyle}
          sx={{
            '&:focus': {
              outline: 'none',
            },
          }}
        >
          {value}
        </ToggleButton>
      ))}

      <ToggleButton
        value='>'
        onClick={() => handleBtnClick('>')}
        style={btnStyleImg}
        sx={{
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <img src={PageArrowRight} alt='Next page' />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
