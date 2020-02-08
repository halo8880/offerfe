import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.columns.map(cell => {
                            return <TableCell align={cell.align ? cell.align : "left"}>
                                {cell.title}
                            </TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, index) => {
                        return <TableRow key={index} hover>
                            {props.columns.map(cell => {
                                return <TableCell align={cell.align ? cell.align : "left"}>
                                    {row[cell.property]}
                                </TableCell>;
                            })}
                        </TableRow>;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}