import './Promocode.css';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SubmitLightBtn from '../../Btns/SubmitLightBtn/SubmitLightBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';
import PromocodeHeadline from './PromocodeHeadline/PromocodeHeadline';
import PromocodeItem from './PromocodeItem/PromocodeItem';
import { useEffect, useState } from 'react';
import FiltersPromocode from '../../FiltersPromocode/FiltersPromocode';
import * as Api from '../../../utils/utils';

export default function Promocode({ promocodes, promocodesArchive }: any) {
  const [showPromocodes, setShowPromocodes] = useState([]);
  const [archiveIsOpen, setArchiveIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClearFilters = () => {
    console.log('clear');
  };

  useEffect(() => {
    archiveIsOpen
      ? setShowPromocodes(promocodesArchive)
      : setShowPromocodes(promocodes);
  }, [promocodes]);

  useEffect(() => {
    if (inputValue !== '') {
      console.log(inputValue);
      Api.getSearchPromos(inputValue).then((data) => {
        console.log(data);
        setShowPromocodes(data.results);
      });
    } else {
      setShowPromocodes(promocodes);
    }
  }, [inputValue]);

  return (
    <div className='promocode'>
      <div className='promocode__container'>
        <div className='promocode__buttons'>
          {!archiveIsOpen && (
            <>
              <SubmitBtn
                width='203px'
                height='40px'
                title='Актуальные промокоды'
                fontSize='14px'
                onClick={() => setArchiveIsOpen(false)}
              />
              <SubmitLightBtn
                width='91px'
                height='40px'
                title='Архив'
                fontSize='14px'
                onClick={() => setArchiveIsOpen(true)}
              />
            </>
          )}
          {archiveIsOpen && (
            <>
              <SubmitLightBtn
                width='203px'
                height='40px'
                title='Актуальные промокоды'
                fontSize='14px'
                onClick={() => setArchiveIsOpen(false)}
              />
              <SubmitBtn
                width='91px'
                height='40px'
                title='Архив'
                fontSize='14px'
                onClick={() => setArchiveIsOpen(true)}
              />
            </>
          )}
        </div>
        <FiltersPromocode
          inputValue={inputValue}
          setInputValue={(e) => setInputValue(e.target.value)}
        />
        <ResetFilters onResetFilters={handleClearFilters} />
        <PromocodeHeadline archiveIsOpen={archiveIsOpen} />
        <ul className='promocode__items'>
          {!archiveIsOpen &&
            showPromocodes.map((item: any) => (
              <PromocodeItem
                key={item.id}
                name={item.name}
                course={item.course}
                telegram={item.telegram}
                promocode={item.value}
                created={item.created}
                status={item.status}
              />
            ))}
          {archiveIsOpen &&
            showPromocodes.map((item: any) => (
              <PromocodeItem
                archiveIsOpen={archiveIsOpen}
                key={item.id}
                name={item.name}
                course={item.course}
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
