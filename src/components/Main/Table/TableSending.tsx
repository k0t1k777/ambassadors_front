import { DataGrid, GridColDef } from "@mui/x-data-grid";
import FilterSelectGrey from "../../FilterSelectGrey/FilterSelectGrey";

const columns: GridColDef[] = [
  { field: "name", headerName: "ФИО амбассадора", width: 193},
  {
    field: "merch",
    headerName: "Размер мерча",
    type: "string",
    sortable: false,
    width: 160,
    renderCell: () => (
      <FilterSelectGrey
        width="124px"
        height="41px"
        defaultValue="Подсказка"
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
    ),
  },
  {
    field: "sizeClother",
    headerName: "Размер одежды",
    type: "number",
    sortable: false,
    width: 160,
    renderCell: () => (
      <FilterSelectGrey
        width="120px"
        height="41px"
        defaultValue="Подсказка"
        fontSize="14px"
        options={[42, 44, 46, 48, 50, 52]}
      />
    ),
  },
  {
    field: "sizeFoot",
    headerName: "Размер ноги",
    sortable: false,
    type: "number",
    width: 160,
    renderCell: () => (
      <FilterSelectGrey
        width="120px"
        height="41px"
        defaultValue="Подсказка"
        fontSize="14px"
        options={[42, 44, 46, 48, 50, 52]}
      />
    ),
  },
  {
    field: "data",
    headerName: "Дата регистрации",
    type: "date",
    sortable: false,
    width: 160,
  },
  { field: "curator", headerName: "Имя куратора", width: 216 },
  {
    field: "index",
    headerName: "Индекс",
    type: "number",
    sortable: false,
    width: 116,
  },
  { field: "country", headerName: "Страна", width: 160 },
  { field: "city", headerName: "Город", width: 160 },
  {
    field: "street",
    headerName: "Улица,дом,квартира",
    sortable: false,
    width: 160,
  },
  {
    field: "phone",
    headerName: "Телефон",
    sortable: false,
    type: "number",
    width: 160,
  },
  { field: "comment", headerName: "Комментарий", sortable: false, width: 160 },
  {
    field: "mounth",
    headerName: "Месяц отправления",
    sortable: false,
    width: 160,
  },
];
const rows = [
  {
    id: 1,
    merch: "",
    name: "Настя Борисова",
    sizeClother: "",
    sizeFoot: "",
    data: new Date(2024, 6, 19),
    curator: "Имя куратора",
    index: 154178,
    country: "Россия",
    city: "Калининград",
    street: "Бориса Галушкина 40, кв. 166",
    phone: +79654128596,
    comment: "Нет",
    mounth: "Сентябрь",
  },
  {
    id: 2,
    merch: "",
    name: "Настя Борисова",
    sizeClother: "",
    sizeFoot: "",
    data: new Date(2024, 6, 19),
    curator: "Имя куратора",
    index: 154178,
    country: "Россия",
    city: "Калининград",
    street: "Бориса Галушкина 40, кв. 166",
    phone: +79654128596,
    comment: "Нет",
    mounth: "Сентябрь",
  },
  {
    id: 3,
    merch: "",
    name: "Настя Борисова",
    sizeClother: "",
    sizeFoot: "",
    data: new Date(2024, 6, 19),
    curator: "Имя куратора",
    index: 154178,
    country: "Россия",
    city: "Калининград",
    street: "Бориса Галушкина 40, кв. 166",
    phone: +79654128596,
    comment: "Нет",
    mounth: "Сентябрь",
  },
  {
    id: 4,
    merch: "",
    name: "Настя Борисова",
    sizeClother: "",
    sizeFoot: "",
    data: new Date(2024, 6, 19),
    curator: "Имя куратора",
    index: 154178,
    country: "Россия",
    city: "Калининград",
    street: "Бориса Галушкина 40, кв. 166",
    phone: +79654128596,
    comment: "Нет",
    mounth: "Сентябрь",
  },
  {
    id: 5,
    merch: "",
    name: "Настя Борисова",
    sizeClother: "",
    sizeFoot: "",
    data: new Date(2024, 6, 19),
    curator: "Имя куратора",
    index: 154178,
    country: "Россия",
    city: "Калининград",
    street: "Бориса Галушкина 40, кв. 166",
    phone: +79654128596,
    comment: "Нет",
    mounth: "Сентябрь",
  },
];

export default function DataTable() {
    return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        rowHeight={80}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  );
}
