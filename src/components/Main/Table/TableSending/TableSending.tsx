import React, { useState } from "react";
import "./TableSending.css";
import ArrowDown from "../../../../assets/Arrow_down.svg";
import ArrowUp from "../../../../assets/Arrow_up.svg";
import FilterSelectGrey from "../../../FilterSelectGrey/FilterSelectGrey";
import InputText from "../../../InputText/InputText";
// import CheckboxTable from "../../CheckboxTable/CheckboxTable";
// import Squea from "../../../assets/Squea.svg";

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
}

const tableData: TableRow[] = [
  {
    selected: false,
    column2: "Имя Амбассадора",
    column3: "",
    column4: "",
    column5: "",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Россия",
    column10: "Калининград",
    column11: "Бориса 4, кв. 166",
    column12: +79654128596,
    column13: "Комментарий",
  },
  {
    selected: false,
    column2: "Имя Амбассадора",
    column3: "",
    column4: "",
    column5: "",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Беларусь",
    column10: "Астана",
    column11: "Бориса Галушкина 40, кв. 166",
    column12: +79654128596,
    column13: "Комментарий",
  },
  {
    selected: false,
    column2: "Имя Амбассадора",
    column3: "",
    column4: "",
    column5: "",
    column6: "23.02.2024",
    column7: "Имя куратора",
    column8: 154178,
    column9: "Нарния",
    column10: "Крагадаш",
    column11: "Галушкина 40, кв. 16б",
    column12: +79654128596,
    column13: "Комментарий",
  },
];

export default function DataTable() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showDetails, setShowDetails] = useState(
    Array(tableData.length).fill(false)
  );

  const toggleDetails = (index: number) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  const toggleSelect = (index: number) => {
    const newSelectedRows = selectedRows.includes(index)
      ? selectedRows.filter((rowIndex) => rowIndex !== index)
      : [...selectedRows, index];
    setSelectedRows(newSelectedRows);
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(Array.from(Array(tableData.length).keys()));
    }
  };

  return (
    <div className="table__sending">
      {" "}
      <div className="table__container-header">
        <div className="table__th table__th_size_s checkbox-all">
          <input
            className="table__checkbox"
            type="checkbox"
            checked={selectedRows.length === tableData.length}
            onChange={toggleSelectAll}
          />
        </div>
        <div className="table__th table__th_size_xl">Имя Амбассадора</div>
        <div className="table__th table__th_size_x">Мерч</div>
        <div className="table__th table__th_size_x">Размер толстовки</div>
        <div className="table__th table__th_size_x">Размер носков</div>
        <div className="table__th table__th_size_x">Дата регистрации</div>
        <div className="table__th table__th_size_l">Имя куратора</div>
        <div className="table__th table__th_size_m">Индекс</div>
        <div className="table__th table__th_size_sm"></div>
      </div>
      {tableData.map((row, index) => (
        <React.Fragment key={index}>
          <div className="table__container-data">
            <div className="table__th table__th_size_s">
              <input
                className="table__checkbox"
                type="checkbox"
                checked={selectedRows.includes(index)}
                onChange={() => toggleSelect(index)}
              />
            </div>
            <div className="table__th table__th_size_xl">{row.column2}</div>
            <div className="table__th table__th_size_x">
              <FilterSelectGrey
                width="124px"
                height="41px"
                placeholder="Подсказка"
                fontSize="14px"
                options={[
                  "Толстовка",
                  "Кофе",
                  "Стикеры",
                  "Плюс",
                  "Клуб учащ...",
                  "Шопер",
                ]}
              />
            </div>
            <div className="table__th table__th_size_x">
              <FilterSelectGrey
                width="120px"
                height="41px"
                placeholder="Подсказка"
                fontSize="14px"
                options={["XS", "S", "M", "L", "XL"]}
              />
            </div>
            <div className="table__th table__th_size_x">
              <FilterSelectGrey
                width="120px"
                height="41px"
                placeholder="Подсказка"
                fontSize="14px"
                options={[36]}
              />
            </div>
            <div className="table__th table__th_size_x">{row.column6}</div>
            <div className="table__th table__th_size_l">{row.column7}</div>
            <div className="table__th table__th_size_m">{row.column8}</div>
            <div className="table__th table__th_size_sm">
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
            </div>
          </div>
          {showDetails[index] && (
            <div className="table__container-dropdawn">
              <div className="table__container-dropdawn-item table__td_size_s">
                <p className="table__title-dropdawn">Страна</p>
                <p className="table__subtitle-dropdawn">{row.column9}</p>
              </div>
              <div className="table__container-dropdawn-item table__td_size_xl">
                <p className="table__title-dropdawn">Город</p>
                <p className="table__subtitle-dropdawn">{row.column10}</p>
              </div>
              <div className="table__container-dropdawn-item table__td_size_xl">
                <p className="table__title-dropdawn">Улица, дом</p>
                <p className="table__subtitle-dropdawn">{row.column11}</p>
              </div>
              <div className="table__container-dropdawn-item table__td_size_x">
                <p className="table__title-dropdawn">Телефон</p>
                <p className="table__subtitle-dropdawn">{row.column12}</p>
              </div>
              <div className="table__container-dropdawn-item table__td_size_xxl">
                <p className="table__input">
                  <label className="table__label" htmlFor="">
                    Комментарий
                  </label>
                  <InputText
                    width="395px"
                    height="36px"
                    padding="0 12px 8px"
                    borderColor="transparent"
                  />
                </p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
