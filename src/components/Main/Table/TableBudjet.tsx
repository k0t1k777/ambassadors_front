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
        // sx={{ minHeight: 800 }}
        size="small"
        aria-label="a dense table"
        box-sizing="borderBox"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: 200, minHeight: 80 }}>
              Имя амбассадора
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Январь
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Февраль
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Март
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Апрель
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Май
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Июнь
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Июль
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Август
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Сентябрь
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Октябрь
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Ноябрь
            </TableCell>
            <TableCell sx={{ minWidth: 80, minHeight: 80 }} align="left">
              Декабрь
            </TableCell>
            <TableCell sx={{ minWidth: 79, minHeight: 80 }} align="left">
              Сумма доставки
            </TableCell>
            <TableCell sx={{ minWidth: 123, minHeight: 80 }} align="left">
              Общая сумма
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.january}</TableCell>
              <TableCell align="left">{row.february}</TableCell>
              <TableCell align="left">{row.march}</TableCell>
              <TableCell align="left">{row.april}</TableCell>
              <TableCell align="left">{row.may}</TableCell>
              <TableCell align="left">{row.junу}</TableCell>
              <TableCell align="left">{row.july}</TableCell>
              <TableCell align="left">{row.august}</TableCell>
              <TableCell align="left">{row.september}</TableCell>
              <TableCell align="left">{row.october}</TableCell>
              <TableCell align="left">{row.november}</TableCell>
              <TableCell align="left">{row.december}</TableCell>
              <TableCell align="left">{row.delivery}</TableCell>
              <TableCell align="left">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
