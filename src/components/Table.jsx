import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'
import Switch from '@mui/material/Switch'
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <TableContainer  >
            <Table sx={{
                minWidth: 650, "& .MuiTableCell-root": {
                    borderBottom: "none", padding: 1,
                }
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }}>Activity</TableCell>
                        <TableCell sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }} align="right">Email</TableCell>
                        <TableCell sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }} align="right">Push</TableCell>
                        <TableCell sx={{ fontSize: 16, fontWeight: 400, color: 'grey' }} align="right">SMS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <Typography variant="body2" sx={{ fontSize: 14 }}>Mentions</Typography>
                            <Typography variant="body2" sx={{ py: .5, color: 'grey' }}>Notify when another user mentions you in a comment</Typography>
                        </TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label}> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label}> </Switch></TableCell>

                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <Typography variant="body2" sx={{ fontSize: 14 }}>Comments</Typography>
                            <Typography variant="body2" sx={{ py: .5, color: 'grey' }}>Notify when another user comments your item.</Typography>
                        </TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label}> </Switch></TableCell>

                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <Typography variant="body2" sx={{ py: .5, fontSize: 14 }}>Follows</Typography>
                            <Typography variant="body2" sx={{ color: 'grey' }}>Notify when another user follows you.</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Switch {...label}> </Switch>
                        </TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label}> </Switch></TableCell>

                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <Typography variant="body2" sx={{ color: 'grey', fontSize: 14 }}>Login from a New Device</Typography>

                        </TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>
                        <TableCell align="right"><Switch {...label} defaultChecked> </Switch></TableCell>

                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}