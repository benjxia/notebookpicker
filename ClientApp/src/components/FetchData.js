import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

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
          </tr>
        </thead>
        <tbody>
          {options.map(lp =>
            <tr key={lp.name}>
              <td><img src = {lp.imgP} alt = "laptop"/> {lp.name}</td>
              <td>{lp.cpu}</td>
              <td>{lp.gpu}</td>
              <td>{lp.memory}</td>
              <td>{lp.strType}</td>
              <td>{lp.strSize}</td>
              <td>{lp.panelType}</td>
              <td>{lp.resolution}</td>
              <td>{lp.size}</td>
              <td>{lp.weight}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderTable(this.state.options);

    return (
      <div>
        <h1 id="tabelLabel">Select Laptops</h1>
        {contents}
      </div>
    );
  }

  async populateLaptopOptions() {
    const response = await fetch('notebooks');
    const data = await response.json();
    this.setState({ options: data, loading: false });
  }
}
