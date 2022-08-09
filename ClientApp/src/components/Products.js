import React, { Component } from 'react';

export class Products extends Component {
  static displayName = Products.name;

  constructor(props) {
    super(props);
    this.state = { options: [], loading: true };
  }

  componentDidMount() {
    this.populateLaptopOptions();
  }

  static renderTable(options) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>CPU</th>
            <th>GPU</th>
            <th>Memory (GB)</th>
            <th>Storage Type</th>
            <th>Storage Capacity (GB)</th>
            <th>Screen Type</th>
            <th>Screen Resolution</th>
            <th>Display Size (Inches)</th>
            <th>Weight (lbs)</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {options.map(lp =>
            <tr key={lp.name}>
              <td><img src = {lp.imgP} alt = "laptop" height = {50} width = {50}/> {lp.name}</td>
              <td>{lp.cpu}</td>
              <td>{lp.gpu}</td>
              <td>{lp.memory}</td>
              <td>{lp.strType}</td>
              <td>{lp.strSize}</td>
              <td>{lp.panelType}</td>
              <td>{lp.resolution}</td>
              <td>{lp.size}</td>
              <td>{lp.weight}</td>
              <td>{lp.minPrice === 0 ? "N/A" : "$" + lp.minPrice.toFixed(2)}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Products.renderTable(this.state.options);

    return (
      <div>
        <h1 id="tabelLabel">Select Laptops</h1>
        {contents}
      </div>
    );
  }

  async populateLaptopOptions() {
    const response = await fetch('api/products');
    const data = await response.json();
    this.setState({ options: data, loading: false });
  }
}
