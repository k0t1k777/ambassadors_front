import './Budjet.css';
import Table from '../Table/TableBudjet';
import BtnSelected from '../../Btns/SelectedBtn/SelectedBtn';

export default function Budjet() {
  return (
    <div className="budjet">
      <div className="budjet__container-search">
        <p>Поиск будет позже</p>
      </div>
      <div className="budjet__table">
        <Table />
      </div>
      <div className="budjet__btnSelected">
        <BtnSelected />
      </div>
    </div>
  );
}
