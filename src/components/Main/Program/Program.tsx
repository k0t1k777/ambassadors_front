import './Program.css';
import TableProgram from '../Table/TableProgram';
import Header from '../../Header/Header';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import InputWithIcon from '../../InputWithIcon/InputWithIcon';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ResetFilters from '../../ResetFilters/ResetFilters';

export default function Program() {
  return (
    <div className='program'>
      <div className='program__container-search'>
        <InputWithIcon width='320px' placeholder='Поиск амбассадора' />
        <SubmitBtn
          title='Выгрузить отчет'
          width='149px'
          height='40px'
          fontSize='14px'
          margin='32px 0 28px auto'
        />
      </div>
      <div className='program__filters'>
        {/* <Filters /> */}
        <ResetFilters />
      </div>
      <div className='program__table'>
        <TableProgram />
      </div>
      <div className='program__paginationBtn'>
        <PaginationBtn />
      </div>
    </div>
  );
}
