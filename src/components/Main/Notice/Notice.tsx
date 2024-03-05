import "./Notice.css";
import TableNotice from "../Table/TableNotice";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import Header from "../../Header/Header";
import NoticeFilter from "./NoticeFilter/NoticeFilter";

export default function Notice() {
  return (
    <>
      <Header title="Уведомления" />
      <div className="notice">
        <div className="notice__filters">
        <NoticeFilter />
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
