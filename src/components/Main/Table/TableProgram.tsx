import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  sweetshot: string,
  coffee: string,
  stickers: string,
  plus: string,
  arzamas: string,
  shoper: string,
  bag: string,
  cross: string,
  socks: string,
  discont: string,
  alisaMini: string,
  alisaMax: string,
  club: string
) {
  return {
    name,
    sweetshot,
    coffee,
    stickers,
    plus,
    arzamas,
    shoper,
    bag,
    cross,
    socks,
    discont,
    alisaMini,
    alisaMax,
    club,
  };
}

const rows = [
  createData(
    "Иван Иванов",
    "1 шт",
    "2 шт",
    "15 шт",
    "1 шт",
    "1 шт",
    "2 шт",
    "1 шт",
    "1 шт",
    "5 шт",
    "1 шт",
    "0 шт",
    "0 шт",
    "1 шт"
  ),
  createData(
    "Иван Иванов",
    "1 шт",
    "2 шт",
    "15 шт",
    "1 шт",
    "1 шт",
    "2 шт",
    "1 шт",
    "1 шт",
    "5 шт",
    "1 шт",
    "0 шт",
    "0 шт",
    "1 шт"
  ),
  createData(
    "Иван Иванов",
    "1 шт",
    "2 шт",
    "15 шт",
    "1 шт",
    "1 шт",
    "2 шт",
    "1 шт",
    "1 шт",
    "5 шт",
    "1 шт",
    "0 шт",
    "0 шт",
    "1 шт"
  ),
  createData(
    "Иван Иванов",
    "1 шт",
    "2 шт",
    "15 шт",
    "1 шт",
    "1 шт",
    "2 шт",
    "1 шт",
    "1 шт",
    "5 шт",
    "1 шт",
    "0 шт",
    "0 шт",
    "1 шт"
  ),
  createData(
    "Иван Иванов",
    "1 шт",
    "2 шт",
    "15 шт",
    "1 шт",
    "1 шт",
    "2 шт",
    "1 шт",
    "1 шт",
    "5 шт",
    "1 шт",
    "0 шт",
    "0 шт",
    "1 шт"
  ),
  createData(
    "Иван Иванов",
    "1 шт",
    "2 шт",
    "15 шт",
    "1 шт",
    "1 шт",
    "2 шт",
    "1 шт",
    "1 шт",
    "5 шт",
    "1 шт",
    "0 шт",
    "0 шт",
    "1 шт"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 1857, minHeight: 560 }}
        size="small"
        aria-label="a dense table"
        box-sizing="borderBox"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: 289, minHeight: 80 }}>
              Имя амбассадора
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Толстовка
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Кофе
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Стикеры
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Плюс
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Арзамас
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Шопер
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Рюкзак
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Сумка кросс
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Носки
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Скидка 50%
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Алиса мини
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Алиса биг
            </TableCell>
            <TableCell sx={{ minWidth: 116, minHeight: 80 }} align="left">
              Клуб учащихся ночью
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
              <TableCell align="left">{row.sweetshot}</TableCell>
              <TableCell align="left">{row.coffee}</TableCell>
              <TableCell align="left">{row.stickers}</TableCell>
              <TableCell align="left">{row.plus}</TableCell>
              <TableCell align="left">{row.arzamas}</TableCell>
              <TableCell align="left">{row.shoper}</TableCell>
              <TableCell align="left">{row.bag}</TableCell>
              <TableCell align="left">{row.cross}</TableCell>
              <TableCell align="left">{row.socks}</TableCell>
              <TableCell align="left">{row.discont}</TableCell>
              <TableCell align="left">{row.alisaMini}</TableCell>
              <TableCell align="left">{row.alisaMax}</TableCell>
              <TableCell align="left">{row.club}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
