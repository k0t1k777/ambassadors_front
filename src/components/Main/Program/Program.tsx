import "./Program.css";
import TableProgram from "../Table/TableProgram";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import ProgramFilter from "./ProgramFilter/ProgramFilter";
import { useEffect, useState } from "react";

export interface ProgramLoyality {
  name: string;
  course: string;
  dispatch_date: string;
  merch: MerchItem[];
}
export interface ProgramProp {
  program: ProgramLoyality[];
}
export interface MerchItem {
  id: number;
  count: number | null;
}

export default function Program({ program } : ProgramProp) {
  const [showProgram, setShowProgram] = useState(program);
  const handleClearFilters = () => {
    setShowProgram(program);
  };
    useEffect(() => {
    setShowProgram(program);
  }, [program]);

  return (
    <div className="program">
      <div className="program__filters">
        <ProgramFilter onResetFilters={handleClearFilters} />
        <SubmitBtn
          title="Выгрузить отчет"
          width="149px"
          height="40px"
          fontSize="14px"
          margin="20px 0 28px auto"
        />
      </div>
      <div className="program__table">
        <TableProgram item={showProgram}/>
      </div>
      <div className="program__paginationBtn">
        <PaginationBtn />
      </div>
    </div>
  );
}
