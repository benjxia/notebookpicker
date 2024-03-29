import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../styles/Productsv2.css";

import { BrandFilter } from './I_Filters/BrandFilter';
import { ReleaseFilter } from './I_Filters/ReleaseFilter';
import { CPUFilter } from './I_Filters/CPUFilter';
import { GPUFilter } from './I_Filters/GPUFilter';
import { MemoryFilter } from './I_Filters/MemoryFilter';


const queryRoot = "api/products?";
export class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // See ProductsController.cs for abbreviation definitions
            // List of strings of valid brands, releases, cpus, etc.
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
            // HTTP get query as string
            query: queryRoot,
        };
        this.handleBrandUpdate = this.handleBrandUpdate.bind(this);
        this.handleReleaseUpdate = this.handleReleaseUpdate.bind(this);
        this.handleCPUUpdate = this.handleCPUUpdate.bind(this);
        this.handleGPUUpdate = this.handleGPUUpdate.bind(this);
        this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
        this.handleMemoryUpdate = this.handleMemoryUpdate.bind(this);
    }

    /**
     * When query needs to be updated, update query state and call Productsv2 to update its stuff
     */
    handleQueryUpdate() {
        let newQuery = "api/products?";
        let QueryFilters = new URLSearchParams();
        // Convert filter states into a coherent HTTP "get" query.
        console.log(this.state.query);
        if (this.state.br !== null && this.state.br.length > 0) {
            QueryFilters.append("br", this.state.br.toString());
        }

        if (this.state.rel !== null && this.state.rel.length > 0) {
            QueryFilters.append("rel", this.state.rel.toString());
        }

        if (this.state.cpu !== null && this.state.cpu.length > 0) {
            QueryFilters.append("cpu", this.state.cpu.toString());
        }

        if (this.state.gpu !== null && this.state.gpu.length > 0) {
            QueryFilters.append("gpu", this.state.gpu.toString());
        }

        if (this.state.pantype !== null && this.state.gpu.length > 0) {
            QueryFilters.append("pantype", this.state.pantype.toString());
        }

        if (this.state.resolu !== null && this.state.resolu.length > 0) {
            QueryFilters.append("resolu", this.state.resolu.toString());
        }

        if (this.state.aspratio !== null && this.state.aspratio.length > 0) {
            QueryFilters.append("aspratio", this.state.aspratio.toString());
        }

        if (this.state.minsize !== 0) {
            QueryFilters.append("minsize", this.state.minsize);
        }

        if (this.state.maxsize !== 20) {
            QueryFilters.append("maxsize", this.state.maxsize);
        }

        if (this.state.minweight !== 0) {
            QueryFilters.append("minweight", this.state.minweight);
        }

        if (this.state.maxweight !== 20) {
            QueryFilters.append("maxweight", this.state.maxweight);
        }

        if (this.state.minmem !== 0) {
            QueryFilters.append("minmem", this.state.minmem);
        }

        if (this.state.maxmem !== 128) {
            QueryFilters.append("maxmem", this.state.maxmem);
        }

        if (this.state.minss !== 0) {
            QueryFilters.append("minss", this.state.minss);
        }

        if (this.state.maxss !== 10000000) {
            QueryFilters.append("maxss", this.state.maxss);
        }

        if (this.state.minprice !== 0) {
            QueryFilters.append("minprice", this.state.minprice);
        }

        if (this.state.maxprice !== 20000) {
            QueryFilters.append("maxprice", this.state.maxprice);
        }

        if (this.state.search.length > 0) {
            QueryFilters.append("search", this.state.search);
        }

        newQuery = queryRoot + QueryFilters.toString();
        //console.log(newQuery);

        this.setState({query: newQuery}, () => {
            this.props.handleFilterChange(newQuery);
        });
    }

    /**
     * Callback function for brandfilter component updates
     * @param {*} newval 
     */
    handleBrandUpdate(newval) {
        this.setState({br: newval}, () => this.handleQueryUpdate());
        
    }

    /**
     * Callback function for releasefilter component updates
     * @param {*} newval 
     */
    handleReleaseUpdate(newval) {
        this.setState({rel: newval}, () => this.handleQueryUpdate());
    }

    /**
     * Callback function for CPUfilter component updates
     * @param {*} newval
     */
    handleCPUUpdate(newval) {
        this.setState({cpu: newval}, () => this.handleQueryUpdate());
    }
    
     /**
     * Callback function for GPUfilter component updates
     * @param {*} newval
     */
    handleGPUUpdate(newval) {
        this.setState({gpu: newval}, () => this.handleQueryUpdate());
    }

     /**
     * Callback function for Memory component updates
     * @param {*} newval
     */
    handleMemoryUpdate(minval, maxval) {
        this.setState({minmem: minval, maxmem: maxval}, () => this.handleQueryUpdate());
    }

    render() {
        return (
            <div>
                <BrandFilter handleBrandUpdate={this.handleBrandUpdate} handleQueryUpdate={this.handleQueryUpdate}/>
                <ReleaseFilter handleReleaseUpdate={this.handleReleaseUpdate} handleQueryUpdate={this.handleQueryUpdate}/>
                <CPUFilter handleCPUUpdate={this.handleCPUUpdate} handleQueryUpdate={this.handleQueryUpdate}/>
                <GPUFilter handleGPUUpdate={this.handleGPUUpdate} handleQueryUpdate={this.handleQueryUpdate}/>
                <MemoryFilter handleMemoryUpdate={this.handleMemoryUpdate} handleQueryUpdate={this.handleQueryUpdate}/>
            </div>
        );
    }
}