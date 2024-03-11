import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Notification } from "../Notice/Notice";
import SubmitBtn from "../../Btns/SubmitBtn/SubmitBtn";
import LinkImg from "../../../assets/Link.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface NoticeProp {
  item: Notification[];
  handleAllAsRead: () => void;
}

const theme = createTheme({
  typography: {
    fontFamily: "YSText",
  },
});

export default function DataTable({ item, handleAllAsRead }: NoticeProp) {
  const mappedRows = item.map((notification) => ({
    id: notification.id,
    name: notification.actor_object_name,
    text: notification.verb,
    link: notification.description,
    date: new Date(notification.timestamp),
    minWidth: 253,
    minHeight: 89,
    unread: notification.unread,
    fontWeight: notification.unread ? "normal" : 900,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Выбрать все", width: 252 },
    {
      field: "text",
      headerName: "",
      type: "string",
      width: 569,
      renderHeader: () => (
        <div
          style={{
            margin: "0 0 0 310px",
            width: "569",
          }}
        >
          <SubmitBtn
            title="Отметить все прочитанным"
            width="100%"
            height="100%"
            fontWeight="500"
            backgroundColor="#fff"
            color="#23272E"
            onClick={handleAllAsRead}
          />
        </div>
      ),
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
      width: 255,
      renderHeader: () => (
        <div
          style={{
            margin: "0 0 0 25px",
          }}
        >
          <SubmitBtn
            title="Удалить выбранные"
            fontWeight="500"
            width="100%"
            height="100%"
            backgroundColor="#fff"
            color="#23272E"
          />
        </div>
      ),
    },
    {
      field: "date",
      headerName: "",
      type: "date",
      sortable: false,
      width: 158,
      renderHeader: () => (
        <SubmitBtn
          title="Удалить всё"
          width="100%"
          height="100%"
          fontWeight="500"
          backgroundColor="#fff"
          color="#23272E"
        />
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100%",
          width: "100%",
          fontFamily: "YSText",
        }}
      >
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
            "& .css-204u17-MuiDataGrid-main": {
              fontSize: "16px",
            },
            "& .css-10zqcfo-MuiDataGrid-root": {
              fontSize: "16px",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
