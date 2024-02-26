import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  january: number,
  february: number,
  march: number,
  april: number,
  may: number,
  junу: number,
  july: number,
  august: number,
  september: number,
  october: number,
  november: number,
  december: number,
  delivery: number,
  total: number
) {
  return {
    name,
    january,
    february,
    march,
    april,
    may,
    junу,
    july,
    august,
    september,
    october,
    november,
    december,
    delivery,
    total,
  };
}

const rows = [
  createData(
    "Алиса Арматова",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
  createData(
    "Катерина Коткина",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
  createData(
    "Мария Маслина",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
  createData(
    "Миша Миронов",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
  createData(
    "Мелиса Мусатова",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
  createData(
    "Кирилл Петухов",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
  createData(
    "Марк Мартинов",
    1000,
    500,
    3000,
    5000,
    1000,
    1500,
    2500,
    10000,
    1500,
    4000,
    500,
    4000,
    3000,
    37500
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 1283,
          height: 80,
          boxSizing: "border-box",
          padding: "0",
        }}
        size="small"
        aria-label="a dense table"
        box-sizing="borderBox"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                minWidth: 200,
                height: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Имя амбассадора
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Янв
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Фев
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Март
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Апр
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Май
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Июн
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Июл
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Авг
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Сен
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Окт
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Ноя
            </TableCell>
            <TableCell
              sx={{
                minWidth: 72,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Дек
            </TableCell>
            <TableCell
              sx={{
                minWidth: 92,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Доставки
            </TableCell>
            <TableCell
              sx={{
                minWidth: 111,
                minHeight: 80,
                boxSizing: "border-box",
                padding: "0",
                fontSize: 16,
              }}
              align="left"
            >
              Итого
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                height: "80px",
                padding: "0",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell sx={{ padding: "0" }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.january}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.february}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.march}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.april}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.may}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.junу}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.july}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.august}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.september}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.october}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.november}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.december}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.delivery}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
