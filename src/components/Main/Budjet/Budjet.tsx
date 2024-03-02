import "./Budjet.css";
import TableBudjet from "../Table/TableBudjet";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import Header from "../../Header/Header";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import BudjetFilter from "./BudjetFilter/BudjetFilter";

export default function Budjet() {
  return (
    <>
      <Header title="Бюджет на мерч" />
      <div className="budjet">
        <div className="budjet__filters">
          <BudjetFilter />
          <SubmitBtn
            title="Выгрузить отчет"
            width="149px"
            height="40px"
            fontSize="14px"
            margin="20px 0 28px auto"
          />
        </div>
        <div className="budjet__table">
          <TableBudjet />
        </div>
        <div className="budjet__paginationBtn">
          <PaginationBtn />
        </div>
      </div>
    </>
  );
}
