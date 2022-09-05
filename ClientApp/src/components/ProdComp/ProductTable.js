import React, { Component } from 'react';
import { useTable } from 'react-table';

export class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], filters: [] };
    }
    static renderTable(options) {
        return (
            <h1>hi</h1>
        );
    }
    render() {
        let contents = ProductTable.renderTable(this.state.products);
        return (
        <div>
           {contents}
           <h1>
            {this.props.products.length}
           </h1>
        </div>
        );
    }
}