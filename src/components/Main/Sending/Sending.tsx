import './Sending.css';
import TableSending from '../Table/TableSending/TableSending';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SendingFilter from './SendingFilter/SendingFilter';
import { useEffect, useState } from 'react';
import * as Api from '../../../utils/utils';

export interface SendingMerch {
  address: string;
  name: string;
  city: string;
  country: string;
  created: string;
  index: number;
  merch: string;
  phone: number;
  size: string;
  current_user: string;
}
export interface SendingProp {
  sending: SendingMerch[];
}

export default function Sending({ sending }: SendingProp) {
  const [showSending, setShowSending] = useState<any>(sending);

  // const [months, setMonths] = useState<any>([]);
  // const [merch, setMerch] = useState<any>([]);
  // const [clother, setClother] = useState<any>([]);
  // const [socks, setSocks] = useState<any>([]);

  // useEffect(() => {
  //   Api.getDropdowns().then(
  //     (res) => (
  //       setMonths(res.months),
  //       setMerch(res.merch.map((item: any) => item.title)),
  //       setClother(Object.values(res.clothing_size)),
  //       setSocks(res.socks_size)
  //     )
  //   );
  // }, []);

  // const [merchValue, setMerchValue] = useState<any>([]);
  // const [clotherValue, setClotherValue] = useState<any>([]);
  // const [monthValue, setMonthValue] = useState<any>([]);
  // const [socksValue, setSocksValue] = useState<any>([]);
  // const handleClearFilters = () => {
  //   setShowSending(sending);
  // };

  useEffect(() => {
    setShowSending(sending);
  }, [sending]);

  // const sendSelect = () => {
  //   // console.log('works');
  //   // console.log(newAmbassador);
  //   try {
  //     Api.postSending({merchValue: , clotherValue: });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [inputValue, setInputValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [monthsValue, setMonthsValue] = useState('');


  useEffect(() => {
    if (countryValue !== '') {
      Api.getFilteredMonths(countryValue).then((data) => {
        console.log(data);
        setShowSending(data.results);
      });
    }
  }, [countryValue]);

  useEffect(() => {
    if (monthsValue !== '') {
      Api.getFilteredCountry(monthsValue).then((data) => {
        console.log(data);
        setShowSending(data.results);
      });
    }
  }, [monthsValue]);

  useEffect(() => {
    if (cityValue !== '') {
      Api.getFilteredCity(cityValue).then((data) => {
        console.log(data);
        setShowSending(data.results);
      });
    }
  }, [cityValue]);

  useEffect(() => {
    if (inputValue !== '') {
      Api.getSearchAmbassadors(inputValue).then((data) => {
        console.log(data);
        setShowSending(data.results);
      });
    } else {
      setShowSending(sending);
    }
  }, [inputValue]);

  return (
    <div className='sending'>
      <div className='sending__filters'>
        <SendingFilter
        cityValue={cityValue}
        setCityValue={setCityValue}
        countryValue={countryValue}
        setCountryValue={setCountryValue}
        value={inputValue}
        setValue={setInputValue}
        monthsValue={monthsValue}
        setMonthsValue={setMonthsValue}
        //  onResetFilters={handleClearFilters}
        />
        <SubmitBtn
          title='Отправить'
          width='149px'
          height='40px'
          fontSize='14px'
          margin='20px 0 28px auto'
          // onClick={sendSelect}
        />
      </div>
      <div className='sending__table'>
        <TableSending
          item={showSending}
          // merchValue={merchValue}
          // setMerchValue={setMerchValue}
          // monthsValue={monthsValue}
        // setMonthsValue={setMonthsValue}
          // months={months}
          // merch={merch}
          // clother={clother}
          // socks={socks}
        />

        {/* <TableSending item={showSending} socksValue={socksValue} setSocksValue={setSocksValue} mounthValue={monthValue} {setMonthValue} merchValue={merchValue} setMerchValue={setMerchValue} clotherValue={clotherValue} setClotherValue={setClotherValue}/> */}
      </div>
      <div className='sending__btnSelected'>
        <PaginationBtn />
      </div>
    </div>
  );
}
