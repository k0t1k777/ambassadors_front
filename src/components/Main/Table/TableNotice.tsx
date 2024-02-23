import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "", width: 252 },
  {
    field: "text",
    headerName: "",
    type: "string",
    width: 609,
  },
  { field: "link", headerName: "", width: 180 },
  {
    field: 'date',
    headerName: '',
    type: 'date',
    sortable: false,
    width: 198,
  },
];
const rows = [
  {
    id: 1,
    name: "Имя амбассадора",
    text: "Смс о том где была сделана публикация/ активность амбассадора",
    link: "Ссылка на контент",
    date: new Date(2024, 4, 24),
  },
  {
    id: 2,
    name: "Имя амбассадора",
    text: "Смс о том где была сделана публикация/ активность амбассадора",
    link: "Ссылка на контент",
    date: new Date(2024, 4, 24),
  },
];

export default function DataTable() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
}
