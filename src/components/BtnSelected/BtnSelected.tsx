import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PageArrowLeft from '../../assets/PageArrow.svg';
import PageArrowRight from '../../assets/PageArrowRight.svg';

interface BtnState {
  btn: string | number | null;
}

function BtnFooter() {
  const [selectedBtn, setSelectedBtn] = useState<BtnState>({ btn: null });

  const handleBtnClick = (value: string | number | null) => {
    setSelectedBtn(prevState => ({
      ...prevState,
      btn: prevState.btn === value ? null : value
    }));
  };

  const btnStyle = {
    width: '32px',
    height: '32px',
    marginRight: '8px',
    border: '1px solid #B5B5B7',
    borderRadius: '8px',
    color: 'black',
    backgroundColor: 'transparent'
  };

  const btnStyleImg = {
    ...btnStyle,
    border: 'none',
    backgroundColor: '#DDE0E4'
  };

  const btnStyleSelected = {
    ...btnStyle,
    color: '#fff',
    backgroundColor: '#23272E'
  };

  return (
    <ToggleButtonGroup exclusive aria-label="page__nav">
      <ToggleButton
        value="<"
        onClick={() => handleBtnClick('<')}
        style={btnStyleImg}
        sx={{
          '&:focus': {
            outline: 'none'
          }
        }}
      >
        <img src={PageArrowLeft} alt="Previous page" />
      </ToggleButton>

      {[1, 2, '...', 9, 10].map(value => (
        <ToggleButton
          key={value}
          value={value}
          onClick={() => handleBtnClick(value)}
          style={selectedBtn.btn === value ? btnStyleSelected : btnStyle}
          sx={{
            '&:focus': {
              outline: 'none'
            }
          }}
        >
          {value}
        </ToggleButton>
      ))}

      <ToggleButton
        value=">"
        onClick={() => handleBtnClick('>')}
        style={btnStyleImg}
        sx={{
          '&:focus': {
            outline: 'none'
          }
        }}
      >
        <img src={PageArrowRight} alt="Next page" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default BtnFooter;
