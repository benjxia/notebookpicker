import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../styles/Productsv2.css";

import { BrandFilter } from './I_Filters/BrandFilter';

const queryRoot = "api/products?";
export class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            br: [], 
            rel: [],
            cpu: [],
            gpu: [],
            strtype: [],
            pantype: [],
            resolu: [],
            aspratio: [],
            minsize: 0,
            maxsize: 20,
            minweight: 0,
            maxweight: 20,
            minmem: 0,
            maxmem: 128,
            minss: 0,
            maxss: 10000000,
            search: "",
            minprice: 0,
            maxprice: 20000,

            query: queryRoot,
        };

        this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
    }

    handleQueryUpdate() {
        let newQuery = "api/products?";
        let QueryFilters = new URLSearchParams();
        // delete later
        console.log(this.state.query);
        if (this.state.br != null && this.state.br.length > 0) {
            QueryFilters.append("br", this.state.br.toString());
        }

        if (this.state.rel != null && this.state.rel.length > 0) {
            QueryFilters.append("rel", this.state.rel.toString());
        }

        if (this.state.cpu != null && this.state.cpu.length > 0) {
            QueryFilters.append("cpu", this.state.cpu.toString());
        }

        if (this.state.pantype != null && this.state.gpu.length > 0) {
            QueryFilters.append("pantype", this.state.pantype.toString());
        }

        if (this.state.resolu != null && this.state.resolu.length > 0) {
            QueryFilters.append("resolu", this.state.resolu.toString());
        }

        if (this.state.aspratio != null && this.state.aspratio.length > 0) {
            QueryFilters.append("aspratio", this.state.aspratio.toString());
        }

        if (this.state.minsize != 0) {
            QueryFilters.append("minsize", this.state.minsize);
        }

        if (this.state.maxsize != 20) {
            QueryFilters.append("maxsize", this.state.maxsize);
        }

        if (this.state.minweight != 0) {
            QueryFilters.append("minweight", this.state.minweight);
        }

        if (this.state.maxweight != 20) {
            QueryFilters.append("maxweight", this.state.maxweight);
        }

        if (this.state.minmem != 0) {
            QueryFilters.append("minmem", this.state.minmem);
        }

        if (this.state.maxmem != 128) {
            QueryFilters.append("maxmem", this.state.maxmem);
        }

        if (this.state.minss != 0) {
            QueryFilters.append("minss", this.state.minss);
        }

        if (this.state.maxss != 10000000) {
            QueryFilters.append("maxss", this.state.maxss);
        }

        if (this.state.minprice != 0) {
            QueryFilters.append("minprice", this.state.minprice);
        }

        if (this.state.maxprice != 20000) {
            QueryFilters.append("maxprice", this.state.maxprice);
        }

        if (this.state.search.length > 0) {
            QueryFilters.append("search", this.state.search);
        }

        newQuery = queryRoot + QueryFilters.toString().replace("+"," ");

        this.setState({query: newQuery});
        this.props.handleFilterChange(newQuery);
    }

    handleBrandUpdate(newval) {
        this.setState({br: newval});
    }

    render() {
        return (
            <div>
                <BrandFilter handleQueryUpdate={this.handleQueryUpdate}/>
            </div>
        );
    }
}