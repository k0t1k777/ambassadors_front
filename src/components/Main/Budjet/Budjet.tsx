import "./Budjet.css";
import TableBudjet from "../Table/TableBudjet";
import PaginationBtn from "../../Btns/PaginationBtn/PaginationBtn";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import BudjetFilter from "./BudjetFilter/BudjetFilter";
import { useState } from "react";

export interface BudjetMerch {
  id: string;
  name: string;
  total_1: number;
  total_2: number;
  total_3: number;
  total_4: number;
  total_5: number;
  total_6: number;
  total_7: number;
  total_8: number;
  total_9: number;
  total_10: number;
  total_11: number;
  total_12: number;
  total_delivery: number;
  total_per_amb: number;
}
export interface BudjetProp {
  budjet: BudjetMerch[];
  sum: string;
}

export default function Budjet({ budjet, sum }: BudjetProp) {
  const [showBudjet, setShowBudjet] = useState(budjet);

  const handleClearFilters = () => {
    setShowBudjet(budjet);
  };

  return (
    <div className="budjet">
      <div className="budjet__filters">
        <BudjetFilter onResetFilters={handleClearFilters} sum={sum} />
        <SubmitBtn
          title="Выгрузить данные"
          width="162px"
          height="40px"
          fontSize="14px"
          margin="20px 0 28px auto"
        />
      </div>
      <div className="budjet__table">
        <TableBudjet item={showBudjet} />
      </div>
      <div className="budjet__paginationBtn">
        <PaginationBtn />
      </div>
    </div>
  );
}
