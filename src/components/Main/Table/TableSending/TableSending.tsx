import React, { useEffect, useState } from 'react';
import './TableSending.css';
import ArrowDown from '../../../../assets/Arrow_down.svg';
import ArrowUp from '../../../../assets/Arrow_up.svg';
import FilterSelectGrey from '../../../FilterSelectGrey/FilterSelectGrey';
import InputText from '../../../InputText/InputText';
import { SendingMerch } from '../../Sending/Sending';
import * as Api from '../../../../utils/utils';

interface SendingProp {
  item: SendingMerch[];
  merch?: string;
  clother?: string;
  socks?: string;
  setMerchValue?: (value: string) => void;
  merchValue?: string;
  clotherValue?: string;
  setClotherValue?: (value: string) => void;
  monthsValues?: string;
  setMonthsValues?: (value: string) => void;
  socksValue?: string;
  setSocksValue?: (value: string) => void;
}

export default function DataTable({ item }: SendingProp) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [months, setMonths] = useState<any>([]);
  const [merch, setMerch] = useState<any>([]);
  const [clother, setClother] = useState<any>([]);
  const [socks, setSocks] = useState<any>([]);

  const [clotherValue, setClotherValue] = useState('');
  const [merchValue, setMerchValue] = useState('');
  const [socksValue, setSocksValue] = useState('');
  const [monthValue, setMonthValue] = useState('');

  const [showDetails, setShowDetails] = useState(
    Array(item.length).fill(false)
  );

  useEffect(() => {
    Api.getDropdowns().then(
      (res) => (
        setMonths(res.months),
        setMerch(res.merch.map((item: any) => item.title)),
        setClother(Object.values(res.clothing_size)),
        setSocks(res.socks_size)
      )
    );
  }, []);

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  const toggleSelect = (index: number) => {
    const newSelectedRows = selectedRows.includes(index)
      ? selectedRows.filter((rowIndex) => rowIndex !== index)
      : [...selectedRows, index];
    setSelectedRows(newSelectedRows);
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === item.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(Array.from(Array(item.length).keys()));
    }
  };
  console.log(item);
  return (
    <div className='table__sending'>
      <div className='table__container-header'>
        <div className='table__th table__th_size_s checkbox-all'>
          <input
            className='table__checkbox'
            type='checkbox'
            checked={selectedRows.length === item.length}
            onChange={toggleSelectAll}
          />
        </div>
        <div className='table__th table__th_size_xl'>Имя Амбассадора</div>
        <div className='table__th table__th_size_x'>Мерч</div>
        <div className='table__th table__th_size_x'>Размер толстовки</div>
        <div className='table__th table__th_size_x'>Размер носков</div>
        <div className='table__th table__th_size_x'>Месяц отправки</div>
        <div className='table__th table__th_size_l'>Имя куратора</div>
        <div className='table__th table__th_size_m'>Индекс</div>
        <div className='table__th table__th_size_sm'></div>
      </div>
      {item.map((row, index) => (
        <React.Fragment key={index}>
          <div className='table__container-data'>
            <div className='table__th table__th_size_s'>
              <input
                className='table__checkbox'
                type='checkbox'
                checked={selectedRows.includes(index)}
                onChange={() => toggleSelect(index)}
              />
            </div>
            <div className='table__th table__th_size_xl'>{row.name}</div>
            <div className='table__th table__th_size_x'>
              <FilterSelectGrey
                width='124px'
                height='41px'
                placeholder='Подсказка'
                fontSize='14px'
                valueSelectFilter={merchValue}
                setValueSelectFilter={setMerchValue}
                options={merch}
              />
            </div>
            <div className='table__th table__th_size_x'>
              <FilterSelectGrey
                width='120px'
                height='41px'
                placeholder='Подсказка'
                fontSize='14px'
                options={clother}
                valueSelectFilter={clotherValue}
                setValueSelectFilter={setClotherValue}
              />
            </div>
            <div className='table__th table__th_size_x'>
              <FilterSelectGrey
                width='120px'
                height='41px'
                placeholder='Подсказка'
                fontSize='14px'
                options={socks}
                valueSelectFilter={socksValue}
                setValueSelectFilter={setSocksValue}
              />
            </div>
            <div className='table__th table__th_size_x'>
              <FilterSelectGrey
                width='120px'
                height='41px'
                placeholder='Подсказка'
                fontSize='14px'
                valueSelectFilter={monthValue}
                setValueSelectFilter={setMonthValue}
                options={months}
              />
            </div>
            <div className='table__th table__th_size_l'>{row.current_user}</div>
            <div className='table__th table__th_size_m'>{row.index}</div>
            <div className='table__th table__th_size_sm'>
              <button
                onClick={() => toggleDetails(index)}
                className='table__button'
              >
                {showDetails[index] ? (
                  <img src={ArrowUp} alt='иконка стрелочки' />
                ) : (
                  <img src={ArrowDown} alt='иконка стрелочки' />
                )}
              </button>
            </div>
          </div>
          {showDetails[index] && (
            <div className='table__container-dropdawn'>
              <div className='table__container-dropdawn-item table__td_size_s'>
                <p className='table__title-dropdawn'>Страна</p>
                <p className='table__subtitle-dropdawn'>{row.country}</p>
              </div>
              <div className='table__container-dropdawn-item table__td_size_xl'>
                <p className='table__title-dropdawn'>Город</p>
                <p className='table__subtitle-dropdawn'>{row.city}</p>
              </div>
              <div className='table__container-dropdawn-item table__td_size_xl'>
                <p className='table__title-dropdawn'>Улица, дом</p>
                <p className='table__subtitle-dropdawn'>{row.address}</p>
              </div>
              <div className='table__container-dropdawn-item table__td_size_x'>
                <p className='table__title-dropdawn'>Телефон</p>
                <p className='table__subtitle-dropdawn'>{row.phone}</p>
              </div>
              <div className='table__container-dropdawn-item table__td_size_xxl'>
                <p className='table__input'>
                  <label className='table__label' htmlFor=''>
                    Комментарий
                  </label>
                  <InputText
                    width='395px'
                    height='30px'
                    padding='0 12px 8px'
                    borderColor='transparent'
                  />
                </p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
