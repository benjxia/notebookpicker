import React, { Component } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

export class ProductTable extends Component {
    constructor(props) {
        super(props);
    }

    createData(number, item, qty, price) {
        return { number, item, qty, price };
    }

    render() {
        const rows = this.props.products;
        return (
          <div>
            {this.props.products.length}
            <TableContainer>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell></TableCell>
                    <TableCell align = "left">Name</TableCell>
                    <TableCell align = "right">CPU</TableCell>
                    <TableCell align = "right">GPU</TableCell>
                    <TableCell align = "right">Memory (GB)</TableCell>
                    <TableCell align = "right">Storage Type</TableCell>
                    <TableCell align = "right">Storage Capacity (GB)</TableCell>
                    <TableCell align = "right">Screen Type</TableCell>
                    <TableCell align = "right">Screen Resolution</TableCell>
                    <TableCell align = "right">Display Size (Inches)</TableCell>
                    <TableCell align = "right">Weight (lbs)</TableCell>
                    <TableCell align = "right">Price (USD)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell><img src = {row.imgP} alt = "laptop" height = {50} width = {50}/></TableCell>
                        <TableCell component="TableCell" scope="row" align = "left">
                        {row.name}
                        </TableCell>
                        <TableCell align="right">{row.cpu}</TableCell>
                        <TableCell align="right">{row.gpu}</TableCell>
                        <TableCell align="right">{row.memory}</TableCell>
                        <TableCell align="right">{row.strType}</TableCell>
                        <TableCell align="right">{row.strSize}</TableCell>
                        <TableCell align="right">{row.panelType}</TableCell>
                        <TableCell align="right">{row.resolution}</TableCell>
                        <TableCell align="right">{row.size.toFixed(1)}</TableCell>
                        <TableCell align="right">{row.weight}</TableCell>
                        <TableCell align="right">{row.nbsellers.length === 0 ? "N/A" : "$" + row.nbsellers.reduce((min, p) => p.price < min ? p.price : min, row.nbsellers[0].price).toFixed(2)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
          </div>  
        );
    }
}
