import './Promocode.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import Filters from '../../Filters/Filters';
import ResetFilters from '../../ResetFilters/ResetFilters';
import PromocodeHeadline from './PromocodeHeadline/PromocodeHeadline';
import PromocodeItem from './PromocodeItem/PromocodeItem';

export default function Promocode() {
  return (
    <div className='promocode'>
      <div className='promocode__container'>
        <div className='promocode__buttons'>
          <SubmitBtn
            width='203px'
            height='40px'
            title='Актуальные промокоды'
            fontSize='14px'
          />
          <SubmitLightBtn
            width='91px'
            height='40px'
            title='Архив'
            fontSize='14px'
          />
        </div>
        {/* <Filters />
        <ResetFilters /> */}
        <PromocodeHeadline />
        <ul className='promocode__items'>
          <PromocodeItem />
          <PromocodeItem />
          <PromocodeItem />
          <PromocodeItem />
          <PromocodeItem />
          <PromocodeItem />
        </ul>
      </div>
    </div>
  );
}
