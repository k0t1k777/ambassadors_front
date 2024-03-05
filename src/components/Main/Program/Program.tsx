import './Program.css';
import TableProgram from '../Table/TableProgram';
import Header from '../../Header/Header';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import ProgramFilter from './ProgramFilter/ProgramFilter';

export default function Program() {
  return (
    <>
      <Header title='Программа лояльности' />
      <div className='program'>
        <div className='program__filters'>
          <ProgramFilter />
          <SubmitBtn
            title='Выгрузить отчет'
            width='149px'
            height='40px'
            fontSize='14px'
            margin='20px 0 28px auto'
          />
        </div>
        <div className='program__table'>
          <TableProgram />
        </div>
        <div className='program__paginationBtn'>
          <PaginationBtn />
        </div>
      </div>
    </>
  );
}
