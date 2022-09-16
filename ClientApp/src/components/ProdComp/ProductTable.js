// import * as React from 'react';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "../styles/Productsv2.css"

export class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        var columns = [
            {
                field: 'name',
                headerName: 'Name',
                width: 300,
                headerClassName: 'product-table-header',
                renderCell: (params) => {
                    return <div><img src = {params.row.imgP} alt = "laptop" height = {50} width = {50}/>{params.value}</div>
                }
            },
            {
                field: 'cpu',
                headerName: 'CPU',
                width: 150,
                headerClassName: 'product-table-header'
            },
            {
                field: 'gpu',
                headerName: 'GPU',
                width: 150,
                headerClassName: 'product-table-header'
            },
            {
                field: 'memory',
                headerName: 'Memory (GB)',
                width: 80,
                headerClassName: 'product-table-header',
                type: 'number',
            },
            {
                field: 'strType',
                headerName: 'Storage Type',
                width: 120,
                headerClassName: 'product-table-header'
            },
            {
                field: 'strSize',
                headerName: 'Storage (GB)',
                width: 80,
                headerClassName: 'product-table-header',
                type: 'number',
            },
            {
                field: 'panelType',
                headerName: 'Panel',
                width: 80,
                headerClassName: 'product-table-header'
            },
            {
                field: 'resolution',
                headerName: 'Resolution',
                width: 100,
                headerClassName: 'product-table-header'
            },
            {
                field: 'size',
                headerName: 'Size (in.)',
                width: 60,
                headerClassName: 'product-table-header',
                type: 'number',
                renderCell: (params) => {
                    return <div>{params.value.toFixed(1)}</div>
                }
            },
            {
                field: 'weight',
                headerName: 'Weight (lbs)',
                width: 75,
                headerClassName: 'product-table-header',
                type: 'number',
            },
            {
                headerName: 'Price',
                width: 80,
                headerClassName: 'product-table-header',
                type: 'number',
                valueGetter: (params) => {
                    return params.row.nbsellers.length === 0 ? "N/A": "$" + params.row.nbsellers.reduce((min, p) => p.price < min ? p.price : min, params.row.nbsellers[0].price).toFixed(2);
                }
            }
        ];

        var rows = this.props.products
        return (
            <div style = {{height: 1200, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={100}
                    rowsPerPageOptions={[100]}
                    disableSelectionOnClick
                    disableColumnFilter
                    disableColumnSelector
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
        );
    }
}