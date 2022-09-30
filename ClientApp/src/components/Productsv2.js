// import { stepContentClasses } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, Component } from 'react';
import { ProductTable } from './ProdComp/ProductTable';
import { Filters } from './ProdComp/Filters'
import "./styles/Productsv2.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

export class Productsv2 extends Component {
  static displayName = Productsv2.name;

  constructor(props) {
    super(props);
    this.state = { 
      products: [], // List of products
      loading: true,
      // Current HTTP query for filtering
      query: "api/products?",
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.populateLaptopOptions();
  }

  /**
   * Update filter query and replace table with updated laptops
   * @param {String} newQuery 
   */
  handleFilterChange(newQuery) {
    this.setState({query: newQuery}, () => {
      this.populateLaptopOptions();
    });
  }

  static renderTable(options) {
    return (
      <div>
        <ProductTable products = {options}/>
      </div>
    );
  }

  render() {
    const Input = styled(MuiInput)`
      width: 42px;
    `;
    let contents = this.state.loading
      ? <div><CircularProgress /></div>
      : Productsv2.renderTable(this.state.products);
      
    return (
      <div>
        <h1 id="tabelLabel">Select Laptops version 2</h1>
        <div>{this.state.products.length} Compatible Laptops</div>
        <Filters handleFilterChange={this.handleFilterChange}/>
        {contents}
      </div>
    );
  }

  /**
   * Use query state to populate laptop table with options
   */
  async populateLaptopOptions() {
    const response = await fetch(this.state.query);
    const data = await response.json();
    this.setState({ products: data, loading: false });
  }
}
