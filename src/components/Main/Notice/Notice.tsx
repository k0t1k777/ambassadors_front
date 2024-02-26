import "./Notice.css";
import TableNotice from "../Table/TableNotice";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import Header from "../../Header/Header";

export default function Notice() {
  return (
    <>
      <Header title="Уведомления" />
      <div className="notice">
        <div className="notice__container-search">
          <p>Поиск будет позже</p>
        </div>
        <div className="notice__table">
          <TableNotice />
        </div>
        <div className="notice__paginationBtn">
          <PaginationBtn />
        </div>
      </div>
    </>
  );
}
