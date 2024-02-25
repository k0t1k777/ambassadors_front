import './Budjet.css';
import Table from '../Table/TableBudjet';
import PaginationBtn from '../../Btns/PaginationBtn/PaginationBtn';
import Header from '../../Header/Header';

export default function Budjet() {
  return (
    <>
    <Header title="Бюджет на мерч"/>
    <div className="budjet">
      <div className="budjet__container-search">
        <p>Поиск будет позже</p>
      </div>
      <div className="budjet__table">
        <Table />
      </div>
      <div className="budjet__btnSelected">
        <PaginationBtn />
      </div>
    </div>
    </>
  );
}
