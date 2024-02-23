import "./Program.css";
import Table from "../Table/TableProgram";

export default function Program() {
  return (
    <div className="program">
      <div className="program__container-search">
        <p>Поиск будет позже</p>
      </div>
      <div className="program__table">
        <Table />
      </div>
    </div>
  );
}
