import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import "../styles/Productsv2.css";

export class CPUFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            M18CorePro: false,
            M28Core: false,
            AMDRyzen54500U: false,
            AMDRyzen55500U: false,
            Inteli511300H: false,
            Inteli51135G7: false,
            Inteli51230U: false,
            Inteli71135G7: false,
            Inteli712700H: false,
            cpuList: [],
        };

        this.handleCPUType = this.handleCPUType.bind(this);
    }

    handleCPUType(cpuVar, name) {
        let curStatus = !this.state[cpuVar];
        let curList = this.state.cpuList;
        this.setState({[cpuVar]: curStatus})
        if (curStatus === true) {
            curList.push(name);
            this.setState({cpuList: curList}, () => {
                this.props.handleCPUUpdate(this.state.cpuList);
            }); 
        } else {
            let idx = this.state.cpuList.indexOf(cpuVar);
            curList.splice(idx, 1).toString();
            this.setState({cpuList: curList}, () => {
                this.props.handleCPUUpdate(this.state.cpuList);
            });
        }
    }
    render() {
        return (
            <FormGroup>
                <FormLabel component="legend">CPU</FormLabel>
                <FormControlLabel control={<Checkbox checked={this.state.M18CorePro} onChange = {() => this.handleCPUType("M18CorePro", "8-Core M1 Pro")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="8-Core M1 Pro" />
                <FormControlLabel control={<Checkbox checked={this.state.M28Core} onChange = {() => this.handleCPUType("M28Core", "8-Core M2")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="8-Core M2" />
                <FormControlLabel control={<Checkbox checked={this.state.AMDRyzen54500U} onChange = {() => this.handleCPUType("AMDRyzen54500U", "AMD Ryzen 5 4500U")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="AMD Ryzen 5 4500U" />
                <FormControlLabel control={<Checkbox checked={this.state.AMDRyzen55500U} onChange = {() => this.handleCPUType("AMDRyzen55500U", "AMD Ryzen 5 5500U")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="AMD Ryzen 5 5500U" />
                <FormControlLabel control={<Checkbox checked={this.state.Inteli511300H} onChange = {() => this.handleCPUType("Inteli511300H", "Intel i5-11300H")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Intel i5-11300H" />
                <FormControlLabel control={<Checkbox checked={this.state.Inteli51135G7} onChange = {() => this.handleCPUType("Inteli51135G7", "Intel i5-1135G7")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Intel i5-1135G7" />
                <FormControlLabel control={<Checkbox checked={this.state.Inteli51230U} onChange = {() => this.handleCPUType("Inteli51230U", "Intel i5-1230U")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Intel i5-1230U" />
                <FormControlLabel control={<Checkbox checked={this.state.Inteli71135G7} onChange = {() => this.handleCPUType("Inteli71135G7", "Intel i7-1135G7")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Intel i7-1135G7" />
                <FormControlLabel control={<Checkbox checked={this.state.Inteli712700H} onChange = {() => this.handleCPUType("Inteli712700H", "Intel i7-12700H")} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Intel i7-12700H" />
            </FormGroup>
        );
    }
}