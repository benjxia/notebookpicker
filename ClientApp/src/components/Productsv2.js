// import { stepContentClasses } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { Component } from 'react';
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
      products: [], 
      loading: true, 
      // filter states
      br: false, 
      brandlist: [],
      rel: false,
      yrlist: [],
      cpu: false,
      cpulist: [],
      gpu: false,
      gpulist: [],
      strtype: false,
      strtypelist: [],
      pantype: false,
      pantypelist: [],
      resolu: false,
      resolulist: [],
      aspratio: false,
      aspratiolist: [],
      minsize: 0,
      maxsize: 20,
      minweight: 0,
      maxweight: 20,
      minmem: 0,
      maxmem: 128,
      minss: 0,
      maxss: 10000000,
      search: null,
      minprice: 0,
      maxprice: 20000
    };
  }

  componentDidMount() {
    this.populateLaptopOptions();
  }

  /**
   * 
   * @param {boolean} status true/false to filter by brand or not
   * @param {Array[boolean]} brandlist true/false for each brand
   */
  handleBrandFilter(status, brandlist) {
    this.setState({br: status, brandlist: brandlist})
  }

  handleReleaseFilter(status, yrlist) {
    this.setState({rel: status, yrlist: yrlist})
  }

  handleCPUFilter(status, cpulist) {
    this.setState({cpu: status, cpulist: cpulist});
  }

  handleGPUFilter(status, gpulist) {
    this.setState({gpu: status, gpulist: gpulist});
  }

  handleStrtypeFilter(status, strtypelist) {
    this.setState({strtype: status, strtypelist: strtypelist});
  }

  

  static renderTable(options) {
    return (
      <div>
        <h1 id="tabelLabel">Select Laptops version 2</h1>
        <div>{options.length} Compatible Laptops</div>
        <Filters />
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
        {contents}
      </div>
    );
  }

  async populateLaptopOptions() {
    const response = await fetch('api/products?');
    const data = await response.json();
    this.setState({ products: data, loading: false });
  }
}
