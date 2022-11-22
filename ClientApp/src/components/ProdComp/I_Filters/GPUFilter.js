import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import "../styles/Productsv2.css";

export class GPUFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IG14Core: false,
            IG8Core: false,
            RTX3060ti: false,
            IrisXeNorm: false,
            IrisXeG7: false,
            Radeon: false,
            gpuList: [],
        };

        this.handleGPUType = this.handleGPUType.bind(this);
    }

    handleGPUType(gpuVar, name) {
        let curStatus = !this.state[gpuVar];
        let curList = this.state.gpuList;
        this.setState({[gpuVar]: curStatus})
        if (curStatus === true) {
            curList.push(name);
            this.setState({gpuList: curList}, () => {
                this.props.handleGPUUpdate(this.state.gpuList);
            }); 
        } else {
            let idx = this.state.gpuList.indexOf(gpuVar);
            curList.splice(idx, 1).toString();
            this.setState({gpuList: curList}, () => {
                this.props.handleGPUUpdate(this.state.gpuList);
            });
        }
    }
    render() {
        return (
            <FormGroup>
                <FormLabel component="legend">GPU</FormLabel>
                <FormControlLabel control={<Checkbox checked={this.state.IG14Core} onChange = {() => this.handleGPUType("IG14Core", "14-Core Integrated Graphics")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="14-Core Integrated Graphics" />
                <FormControlLabel control={<Checkbox checked={this.state.IG8Core} onChange = {() => this.handleGPUType("IG8Core", "8-Core Integrated Graphics")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="8-Core Integrated Graphics" />
                <FormControlLabel control={<Checkbox checked={this.state.RTX3060ti} onChange = {() => this.handleGPUType("RTX3060ti", "GeForce RTX 3060 Ti")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="GeForce RTX 3060 Ti" />
                <FormControlLabel control={<Checkbox checked={this.state.IrisXeNorm} onChange = {() => this.handleGPUType("IrisXeNorm", "Iris Xe Graphics")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Iris Xe Graphics" />
                <FormControlLabel control={<Checkbox checked={this.state.IrisXeG7} onChange = {() => this.handleGPUType("IrisXeG7", "Iris Xe Graphics G7")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Irix Xe Graphics G7" />
                <FormControlLabel control={<Checkbox checked={this.state.Radeon} onChange = {() => this.handleGPUType("Radeon", "Radeon Graphics")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Radeon Graphics" />
            </FormGroup>
        );
    }
}