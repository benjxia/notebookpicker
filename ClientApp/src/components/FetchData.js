import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
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
            <th>Size</th>
            <th>Weight (lbs)</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.name}>
              <td>{forecast.name}</td>
              <td>{forecast.cpu}</td>
              <td>{forecast.gpu}</td>
              <td>{forecast.memory}</td>
              <td>{forecast.strType}</td>
              <td>{forecast.strSize}</td>
              <td>{forecast.panelType}</td>
              <td>{forecast.resolution}</td>
              <td>{forecast.size}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
