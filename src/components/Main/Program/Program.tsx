import "./Program.css";
import TableProgram from "../Table/TableProgram";
import Header from "../../Header/Header";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";

export default function Program() {
  return (
    <>
      <Header title="Программа лояльности" />
      <div className="program">
        <div className="program__container-search">
          <p>Поиск будет позже</p>
        </div>
        <div className="program__table">
          <TableProgram />
        </div>
        <div className="program__paginationBtn">
          <PaginationBtn />
        </div>
      </div>
    </>
  );
}
