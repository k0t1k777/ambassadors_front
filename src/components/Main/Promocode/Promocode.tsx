import './Promocode.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import Filters from '../../Filters/Filters';
import ResetFilters from '../../ResetFilters/ResetFilters';
import PromocodeHeadline from './PromocodeHeadline/PromocodeHeadline';
import PromocodeItem from './PromocodeItem/PromocodeItem';
import { useEffect, useState } from 'react';
import FiltersPromocode from '../../FiltersPromocode/FiltersPromocode';

export default function Promocode({ promocodes }: any) {
  const [showPromocodes, setShowPromocodes] = useState([]);

  const [ambassadorFieldsIsOpen, setAmbassadorFieldsIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Ambassador | undefined>();
  const [inputValue, setInputValue] = useState('');
  const [courseValue, setCourseValue] = useState('');
  const [sexValue, setSexValue] = useState('');
  const [sexShowValue, setSexShowValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [statusShowValue, setStatusShowValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [isSendingOpen, setIsSendingOpen] = useState(false);
  const [date, setDate] = useState('');

  const handleClearFilters = () => {
    setCourseValue('');
    setSexValue('');
    setStatusValue('');
    setCityValue('');
    setCountryValue('');
    setSexValue('');
    setInputValue('');
    setShowAmbassadors(ambassadors);
  };

  useEffect(() => {
    setShowPromocodes(promocodes);
  }, [promocodes]);

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
        <FiltersPromocode
        // ambassadors={showAmbassadors}
        // courseValue={courseValue}
        // setCourseValue={setCourseValue}
        // sexValue={sexValue}
        // setSexValue={setSexValue}
        // statusValue={statusValue}
        // setStatusValue={setStatusValue}
        // cityValue={cityValue}
        // setCityValue={setCityValue}
        // countryValue={countryValue}
        // setCountryValue={setCountryValue}
        // valueDate={date}
        // setValueDate={setDate}
        />
        <ResetFilters onResetFilters={handleClearFilters} />
        <PromocodeHeadline />
        <ul className='promocode__items'>
          {showPromocodes.map((item: any) => (
            <PromocodeItem
              key={item.id}
              name={item.name}
              course={'course'}
              telegram={item.telegram}
              promocode={item.value}
              created={item.created}
              status={item.status}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
