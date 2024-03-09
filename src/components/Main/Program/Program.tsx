import './Program.css';
import TableProgram from '../Table/TableProgram';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ProgramFilter from './ProgramFilter/ProgramFilter';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as Api from '../../../utils/utils';

export interface ProgramLoyality {
  name: string;
  course: string;
  dispatch_date: string;
  merch: MerchItem[];
}
export interface ProgramProp {
  program: ProgramLoyality[];
}
export interface MerchItem {
  id: number;
  count: number | null;
}

export default function Program({ program }: ProgramProp) {
  console.log(program);
  const [showProgram, setShowProgram] = useState(program);
  const [inputValue, setInputValue] = useState('');

  const [showDateBefore, setShowDateBefore] = useState<any>('');
  const [showDateAfter, setShowDateAfter] = useState<any>('');
  const [date, setDate] = useState([dayjs(), dayjs()]);

  useEffect(() => {
    setShowDateBefore(dayjs(date[1]).format('YYYY-MM-DD'));
    setShowDateAfter(dayjs(date[0]).format('YYYY-MM-DD'));
  }, [date]);

  useEffect(() => {
    if (
      showDateBefore !== dayjs().format('YYYY-MM-DD') &&
      showDateAfter !== dayjs().format('YYYY-MM-DD')
    ) {
      Api.getFilteredProgramDateRange(showDateAfter, showDateBefore).then(
        (data) => {
          console.log(data.results);
          setShowProgram(data.results);
        }
      );
    }
  }, [showDateBefore, showDateAfter]);
  console.log(showDateBefore, showDateAfter);
  useEffect(() => {
    if (inputValue !== '') {
      console.log(inputValue);
      Api.getSearchProgram(inputValue).then((data) => {
        console.log(data);
        setShowProgram(data.results);
      });
    } else {
      setShowProgram(program);
    }
  }, [inputValue]);

  // const handleClearFilters = () => {
  //   setShowProgram(program);
  // };
  useEffect(() => {
    setShowProgram(program);
  }, [program]);

  return (
    <div className='program'>
      <div className='program__filters'>
        <ProgramFilter
          date={date}
          setDate={setDate}
          inputValue={inputValue}
          setInputValue={setInputValue}
          // onResetFilters={handleClearFilters}
        />
        <SubmitBtn
          title='Выгрузить отчет'
          width='149px'
          height='40px'
          fontSize='14px'
          margin='20px 0 28px auto'
        />
      </div>
      <div className='program__table'>
        <TableProgram item={showProgram} />
      </div>
      <div className='program__paginationBtn'>
        <PaginationBtn />
      </div>
    </div>
  );
}
