import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BudjetMerch } from "../Budjet/Budjet";
// import { useEffect, useState } from "react";

interface BudjetItemProps {
  item: BudjetMerch[];
}

export default function DenseTable({ item }: BudjetItemProps) {
  // const [tableData, setTableData] = useState<BudjetMerch[]>([]);

  // useEffect(() => {
  //   if (item.length > 0) {
  //     setTableData(item);
  //   }
  // }, [item]);

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
          {item.map((row) => (
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
                {row.total_1 !== null ? row.total_1 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_2 !== null ? row.total_2 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_3 !== null ? row.total_3 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_4 !== null ? row.total_4 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_5 !== null ? row.total_5 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_6 !== null ? row.total_6 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_7 !== null ? row.total_7 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_8 !== null ? row.total_8 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_9 !== null ? row.total_9 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_10 !== null ? row.total_10 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_11 !== null ? row.total_11 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_12 !== null ? row.total_12 : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_delivery !== null ? row.total_delivery : "-"}
              </TableCell>
              <TableCell sx={{ padding: "0", fontSize: 16 }} align="left">
                {row.total_per_amb !== null ? row.total_per_amb : 0}{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
