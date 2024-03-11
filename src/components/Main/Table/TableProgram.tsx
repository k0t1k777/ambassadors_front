import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProgramLoyality } from '../Program/Program';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TableProgrammData } from '../../../utils/constants';
import { Typography } from '@mui/material';

interface ProgramProp {
  item: ProgramLoyality[];
}

const theme = createTheme({
  typography: {
    fontFamily: 'YSText'
  }
});

export default function DenseTable({ item }: ProgramProp) {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table
          sx={{
            height: '80px',
            width: '1299px',
            '&:MuiTableCell-root': { borderRight: 1 }
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
                  padding: '0 0 0 16px',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
              >
                {TableProgrammData.AmbaName}
                <Typography
                  variant="body2"
                  sx={{ fontSize: '14px', color: '#797981', lineHeight: '20px' }}
                >
                  {TableProgrammData.direction}
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  minWidth: 84,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.clothe}
              </TableCell>
              <TableCell
                sx={{
                  minWidth: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.coffe}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.stickers}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.plus}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.arzamaz}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.shopper}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.backpag}{' '}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.socks}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.bagCross}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.dicsount}
              </TableCell>
              <TableCell
                sx={{
                  lineHeight: '20px',
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400'
                }}
                align="left"
              >
                {TableProgrammData.aliceMini}
              </TableCell>
              <TableCell
                sx={{
                  width: 74,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.alixeBig}
              </TableCell>
              <TableCell
                sx={{
                  width: 100,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.nightClub}
              </TableCell>
              <TableCell
                sx={{
                  width: 91,
                  minHeight: 80,
                  padding: 0,
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px'
                }}
                align="left"
              >
                {TableProgrammData.dateSend}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map(row => (
              <TableRow
                key={row.name}
                sx={{
                  height: '80px',
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:nth-of-type(1)': { width: '1000px' }
                }}
              >
                <TableCell sx={{ padding: '0 0 0 16px', fontSize: 16 }} component="th" scope="row">
                  {row.name}
                  <p style={{ fontSize: '14px', color: '#797981', margin: 0 }}>{row.course} </p>
                </TableCell>
                {row.merch.map(merchItem => (
                  <TableCell key={merchItem.id} sx={{ padding: '0', fontSize: 16 }}>
                    {merchItem.count !== null ? `${merchItem.count} шт` : '-'}
                  </TableCell>
                ))}
                <TableCell sx={{ padding: '0', fontSize: 16 }} align="left">
                  {row.dispatch_date
                    ? new Date(row.dispatch_date).toLocaleDateString('ru-RU')
                    : '-'}{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
