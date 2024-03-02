import "./Budjet.css";
import TableBudjet from "../Table/TableBudjet";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import Header from "../../Header/Header";
import ResetFilters from "../../ResetFilters/ResetFilters";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import Filters from "../../Filters/Filters";

export default function Budjet() {
  return (
    <>
      <Header title="Бюджет на мерч" />
      <div className="budjet">
      <div className="budjet__container-search">
      <SubmitBtn
            title="Выгрузить отчет"
            width="149px"
            height="40px"
            fontSize="14px"
            margin="32px 0 28px auto"
          />
        </ div>
        <div className="budjet__filters">
          <Filters />
          <ResetFilters />
         
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
