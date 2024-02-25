import "./Program.css";
import Table from "../Table/TableProgram";
import Header from "../../Header/Header";

export default function Program() {
  return (
    <>
      <Header title="Программа лояльности" />
      <div className="program">
        <div className="program__container-search">
          <p>Поиск будет позже</p>
        </div>
        <div className="program__table">
          <Table />
        </div>
      </div>
    </>
  );
}