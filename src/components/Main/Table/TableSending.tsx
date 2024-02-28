import React, { useState } from "react";
import "./TableSending.css";
import ArrowDown from "../../../assets/Arrow_down.svg";
import ArrowUp from "../../../assets/Arrow_up.svg";
// import CheckboxTable from "../../CheckboxTable/CheckboxTable";
// import Squea from "../../../assets/Squea.svg";
// import FilterSelectGrey from "../../FilterSelectGrey/FilterSelectGrey";

interface TableRow {
  selected: boolean;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
  column8: number;
  column9: string;
  column10: string;
  column11: string;
  column12: number;
  column13: string;
  column14: string;
}

const tableData: TableRow[] = [
  {
    selected: false,
    column2: "Мерч",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия1",
    column10: "Калининград1",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий",
  },
  {
    selected: false,
    column2: "Мерч",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия2",
    column10: "Калининград2",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий",
  },
  {
    selected: false,
    column2: "Мерч",
    column3: "Силект",
    column4: "Силект",
    column5: "Силект",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия3",
    column10: "Калининград3",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Сентябрь",
    column14: "Комментарий",
  },
];

export default function DataTable() {
  
  const [showDetails, setShowDetails] = useState(
    Array(tableData.length).fill(false)
  );

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div>
      <table className="table__sending">
        <thead>
          <tr className="table__tr">
            <th style={{ width: 36}}>Выделить все </th>
            <th className="table__th table__th_size_xl">ФИО амбассадора</th>
            <th className="table__th table__th_size_x">Мерч</th>
            <th className="table__th table__th_size_x">Размер толстовки</th>
            <th className="table__th table__th_size_x">Размер носков</th>
            <th className="table__th table__th_size_x">Дата регистрации</th>
            <th className="table__th table__th_size_l">Имя куратора</th>
            <th className="table__th table__th_size_m">Индекс</th>
            <th style={{ width: 68}}></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="table__td">
                  <input
                    type="checkbox"
                    checked={row.selected}
                  />
                </td >
                <td className="table__td">{row.column2}</td>
                <td className="table__td">{row.column3}</td>
                <td className="table__td">{row.column4}</td>
                <td className="table__td">{row.column5}</td>
                <td className="table__td">{row.column6}</td>
                <td className="table__td">{row.column7}</td>
                <td className="table__td">{row.column8}</td>
                <td className="table__td">
                  <button
                    onClick={() => toggleDetails(index)}
                    className="table__button"
                  >
                    {showDetails[index] ? (
                      <img src={ArrowUp} alt="иконка стрелочки" />
                    ) : (
                      <img src={ArrowDown} alt="иконка стрелочки" />
                    )}
                  </button>
                </td>
              </tr>
              {showDetails[index] && (
                <tr className="table__tr">
                  <td className="table__td table__td_size_s">{row.column9}</td>
                  <td className="table__td table__td_size_l">{row.column10}</td>
                  <td className="table__td table__td_size_xl">
                    {row.column11}
                  </td>
                  <td className="table__td table__th_size_x">{row.column12}</td>
                  <td className="table__td table__td_size_s">{row.column13}</td>
                  <td className="table__td table__td_size_xxl">
                    {row.column14}
                  </td>
                  {/* {index + 1} */}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
