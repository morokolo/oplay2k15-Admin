import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

function OTable({ children, rows, header }) {
  return (
    <div>
      <TableContainer>
        <Table className="table-width" aria-label="customized table">
          <TableHead>
            <TableRow>
              {header.map((hRow) => (
                <StyledTableCell>{hRow.title}</StyledTableCell>
              ))}
              {
                children &&
                <StyledTableCell align="right">Actions</StyledTableCell>
              }
            </TableRow>
          </TableHead>
          {rows.length > 0 &&
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  {header.map((rowHeader, hIndex) => {
                    return hIndex === 0 ?
                      <StyledTableCell component="th" scope="row" key={`${index}_${hIndex}`}>
                        {row[header[hIndex].key]}
                      </StyledTableCell> :
                      <StyledTableCell key={`${index}_${hIndex}`}>{row[header[hIndex].key]}</StyledTableCell>
                  })}
                  {
                    children &&
                    <StyledTableCell align="right">
                      {children}
                    </StyledTableCell>
                  }
                </StyledTableRow>
              ))}
            </TableBody>
          }
        </Table>
      </TableContainer>
    </div>
  )
}

OTable.propTypes = {
  children: PropTypes.node,
  header: PropTypes.any.isRequired
};

export default OTable
