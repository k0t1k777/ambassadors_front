import './Sending.css';
import TableSending from '../Table/TableSending/TableSending';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import Header from '../../Header/Header';
import SubmitBtn from '../../Btns/SubmitBtn/SubmitBtn';
import SendingFilter from './SendingFilter/SendingFilter';

export default function Sending() {
  return (
    <>
      <Header title='Отправка мерча' />
      <div className='sending'>
        <div className='sending__filters'>
          <SendingFilter />
          <SubmitBtn
            title='Отправить'
            width='149px'
            height='40px'
            fontSize='14px'
            margin='32px 0 28px auto'
          />
        </div>
        <div className='sending__table'>
          <TableSending />
        </div>
        <div className='sending__btnSelected'>
          <PaginationBtn />
        </div>
      </div>
    </>
  );
}
