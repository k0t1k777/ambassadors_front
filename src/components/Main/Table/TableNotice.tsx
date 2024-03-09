import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Notification } from "../Notice/Notice";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import LinkImg from "../../../assets/Link.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface NoticeProp {
  item: Notification[];
}

const theme = createTheme({
  typography: {
    fontFamily: "YSText",
  },
});

const columns: GridColDef[] = [
  { field: "name", headerName: "Выбрать все", width: 252 },
  {
    field: "text",
    headerName: "",
    type: "string",
    width: 609,
  },
  {
    field: "link",
    headerName: "",
    renderCell: () => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        <img
          src={LinkImg}
          alt="link"
          style={{ width: "24px", height: "24px", marginRight: "7px" }}
        />
        <span style={{ fontSize: "13px" }}>Ссылка на контент</span>
      </div>
    ),
    width: 180,
    renderHeader: () => (
      <SubmitBtn
        title="Удалить выбранные"
        width="100%"
        height="100%"
        fontSize="14px"
        backgroundColor="#fff"
        color="#23272E"
      />
    ),
  },
  {
    field: "date",
    headerName: "",
    type: "date",
    sortable: false,
    width: 198,
    renderHeader: () => (
      <SubmitBtn
        title="Удалить всё"
        width="100%"
        height="100%"
        fontSize="14px"
        backgroundColor="#fff"
        color="#23272E"
      />
    ),
  },
];

export default function DataTable({ item }: NoticeProp) {
  const mappedRows = item.map((notification) => ({
    id: notification.id,
    name: notification.actor_content_type,
    text: notification.description,
    link: notification.verb,
    // link: {
    //   image: LinkImg,
    //   label: "Ссылка",
    // },
    date: new Date(notification.timestamp),
    minWidth: 253,
    minHeight: 89,
    // unread: notification.unread,
    fontWeight: notification.unread ? "normal" : 900,
  }));
  console.log('notification: ', item);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%", width: "100%", fontFamily: "YSText" }}>
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
            "& .MuiButtonBase-root:hover": {
              backgroundColor: "#fff",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
