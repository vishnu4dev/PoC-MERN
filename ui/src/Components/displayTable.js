import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { multiStepContext } from '../stepContext';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

function DisplayTable() {

    const classes = useStyles();

    const { finalData } = useContext(multiStepContext);

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Occupation</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((row) => (
              <StyledTableRow key={row.FirstName}>
                <StyledTableCell component="th" scope="row">
                  {row.FirstName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.LastName}</StyledTableCell>
                <StyledTableCell align="right">{row.Contact}</StyledTableCell>
                <StyledTableCell align="right">{row.Address}</StyledTableCell>
                <StyledTableCell align="right">{row.Occupation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DisplayTable;