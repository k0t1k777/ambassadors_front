import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Notification } from "../Notice/Notice";
// import LinkImg from "../../../assets/Link.svg?react";

interface NoticeProp {
  item: Notification[];
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Выбрать все", width: 252 },
  {
    field: "text",
    headerName: "",
    type: "string",
    width: 609,
  },
  { field: "link", headerName: "", width: 180 },
  {
    field: "date",
    headerName: "",
    type: "date",
    sortable: false,
    width: 198,
  },
];


export default function DataTable({ item }: NoticeProp) {
  console.log('item: ', item);
  
  const mappedRows = item.map((notification) => ({
    id: notification.id,
    name: notification.actor_content_type,
    text: notification.description,
    link: notification.verb,
    date: new Date(notification.timestamp),
    minWidth: 253,
    minHeight: 89,
  }));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={mappedRows}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{
          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
          "& .MuiDataGrid-menuIcon": {
            display: "none",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            display: "none",
          },
        }}
      />
    </div>
  );
}
