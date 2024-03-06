import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BudjetMerch } from '../Budjet/Budjet';


interface BudjetItemProps {
  item: BudjetMerch;
}

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
    item.name,
    item.total_1,
    item.total_2,
    item.total_3,
    item.total_4,
    item.total_5,
    item.total_6,
    item.total_7,
    item.total_8,
    item.total_9,
    item.total_10,
    item.total_11,
    item.total_12,
    item.total_delivery,
    item.total_per_amb,
  ),
];

export default function DenseTable({ item }: BudjetItemProps) {
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
          {rows.map((item) => (
            <TableRow
              key={item.name}
              sx={{
                height: "80px",
                padding: "0",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell sx={{ padding: "0" }} component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.january}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.february}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.march}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.april}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.may}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.junу}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.july}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.august}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.september}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.october}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.november}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.december}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.delivery}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {item.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
