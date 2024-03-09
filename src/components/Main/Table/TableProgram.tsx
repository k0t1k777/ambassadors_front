import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProgramLoyality } from "../Program/Program";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface ProgramProp {
  item: ProgramLoyality[];
}

const theme = createTheme({
  typography: {
    fontFamily: "YSText",
  },
});

export default function DenseTable({ item }: ProgramProp) {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table
          sx={{
            height: 80,
            width: 1299,
            "&:MuiTableCell-root": { borderRight: 1 },
          }}
          size="small"
          aria-label="a dense table"
          box-sizing="borderBox"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  minWidth: 194,
                  height: 80,
                  padding: "0 0 0 16px",
                  fontSize: 16,
                }}
              >
                Имя амбассадора
              </TableCell>
              <TableCell
                sx={{ minWidth: 84, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Толстовка
              </TableCell>
              <TableCell
                sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Кофе
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Стикеры
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Плюс
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Арзамас
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Шопер
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Рюкзак
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Носки
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Сумка кросс
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Скидка 50%
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Алиса мини
              </TableCell>
              <TableCell
                sx={{ width: 74, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Алиса биг
              </TableCell>
              <TableCell
                sx={{ width: 100, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Клуб учащихся ночью
              </TableCell>
              <TableCell
                sx={{ width: 91, minHeight: 80, padding: 0, fontSize: 16 }}
                align="left"
              >
                Дата отправки
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  height: "80px",
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(1)": { width: "1000px" },
                }}
              >
                <TableCell
                  sx={{ padding: "0 0 0 16px", fontSize: 16 }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                  <p style={{ fontSize: "14px", color: "#797981", margin: 0 }}>
                    {row.course}{" "}
                  </p>
                </TableCell>
                {row.merch.map((merchItem) => (
                  <TableCell
                    key={merchItem.id}
                    sx={{ padding: "0", fontSize: 16 }}
                  >
                    {merchItem.count !== null ? `${merchItem.count} шт` : "-"}
                  </TableCell>
                ))}
                <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                  {row.dispatch_date
                    ? new Date(row.dispatch_date).toLocaleDateString("ru-RU")
                    : "-"}{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
