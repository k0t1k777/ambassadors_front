import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
type date = string; // Определение типа date

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
  club: string,
  date: date // Использование типа date
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
    date,
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
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
    "1 шт",
    "26.02.2024"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          height: 80,
          width: 1283,
        }}
        size="small"
        aria-label="a dense table"
        box-sizing="borderBox"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ minWidth: 194, height: 80, padding: 0, fontSize: 16 }}
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
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Стикеры
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Плюс
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Арзамас
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Шопер
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Рюкзак
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Сумка кросс
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Носки
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Скидка 50%
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Алиса мини
            </TableCell>
            <TableCell
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
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
              sx={{ minWidth: 74, minHeight: 80, padding: 0, fontSize: 16 }}
              align="left"
            >
              Дата отправки
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                height: "80px",
                "&:last-child td, &:last-child th": { border: 0 },
                "&:nth-of-type(1)": { width: "1000px" },
              }}
            >
              <TableCell
                sx={{ padding: "0", fontSize: 16 }}
                component="th"
                scope="row"
              >
                {row.name}
                <p style={{ fontSize: "14px", color: "#797981", margin: 0 }}>
                  Направление
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.sweetshot}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.coffee}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.stickers}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.plus}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.arzamas}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.shoper}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.bag}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.cross}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.socks}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.discont}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.alisaMini}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.alisaMax}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.club}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
