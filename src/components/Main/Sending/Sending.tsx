import './Sending.css';
import TableSending from '../Table/TableSending';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import Header from '../../Header/Header';


export default function Sending() {
  return (
    <>
     <Header title="Отправка мерча" />
    <div className="sending">
      <div className="sending__container-search">
        <p>Поиск будет позже</p>
      </div>
      <div className="sending__table">
        <TableSending />
      </div>
      <div className="sending__btnSelected">
        <PaginationBtn />
      </div>
    </div>
    </>
  );
}
