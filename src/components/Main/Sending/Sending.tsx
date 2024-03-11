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
  pagination: any;
}

export default function Sending({ sending, pagination }: SendingProp) {
  const [showSending, setShowSending] = useState<any>(sending);

  useEffect(() => {
    setShowSending(sending);
  }, [sending]);

  const [inputValue, setInputValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [monthsValue, setMonthsValue] = useState('');

  const [clotherValue, setClotherValue] = useState('');
  const [merchValue, setMerchValue] = useState('');
  const [socksValue, setSocksValue] = useState('');
  const [monthValue, setMonthValue] = useState('');


  useEffect(() => {
    if (countryValue !== '') {
      Api.getFilteredMonths(countryValue).then(data => {
        setShowSending(data.results);
      });
    }
  }, [countryValue]);

  useEffect(() => {
    if (monthsValue !== '') {
      Api.getFilteredCountry(monthsValue).then(data => {
        setShowSending(data.results);
      });
    }
  }, [monthsValue]);

  useEffect(() => {
    if (cityValue !== '') {
      Api.getFilteredCity(cityValue).then(data => {
        console.log(data);
        setShowSending(data.results);
      });
    }
  }, [cityValue]);

  useEffect(() => {
    if (inputValue !== '') {
      Api.getSearchAmbassadors(inputValue).then(data => {
        console.log(data);
        setShowSending(data.results);
      });
    } else {
      setShowSending(sending);
    }
  }, [inputValue]);
  const [page, setPage] = useState(1);

  console.log(page);

  useEffect(() => {
    Api.getDataAmbassadorPage(page.toString()).then((res) =>
      setShowSending(res.results)
    );
  }, [page]);

  console.log(pagination);

  return (
    <div className="sending">
      <div className="sending__filters">
        <SendingFilter
          cityValue={cityValue}
          setCityValue={setCityValue}
          countryValue={countryValue}
          setCountryValue={setCountryValue}
          value={inputValue}
          setValue={setInputValue}
          monthsValue={monthsValue}
          setMonthsValue={setMonthsValue}
          //onResetFilters={handleClearFilters}
        />
        <SubmitBtn
          title="Отправить"
          width="149px"
          height="40px"
          fontSize="14px"
          margin="20px 0 28px auto"
        />
      </div>
      <div className='sending__table'>
        <TableSending
          item={showSending}
          monthsValues={monthValue}
          setMonthsValues={setMonthValue}
          merchValue={merchValue}
          setMerchValue={setMerchValue}
          clotherValue={clotherValue}
          setClotherValue={setClotherValue}
          socksValue={socksValue}
          setSocksValue={setSocksValue}
        />
      </div>
      <div className="pagination">
        <PaginationBtn pagination={pagination} setPage={setPage} page={page} />
      </div>
    </div>
  );
}
