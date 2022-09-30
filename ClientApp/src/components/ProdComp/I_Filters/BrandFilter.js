import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import "../styles/Productsv2.css";

export class BrandFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            APPLE: false,
            DELL: false,
            ASUS: false,
            MICROSOFT: false,
            HP: false,
            ACER: false,
            brList: [], // list of strings of qualifying brands
        };

        this.handleApple = this.handleApple.bind(this);
    }

    /**
     * Update brList for Apple checkbox changes
     */
    handleApple() {
        let curStatus = !this.state.APPLE;
        let curList = this.state.brList;
        this.setState({APPLE: curStatus})
        if (curStatus === true) {
            curList.push("APPLE");
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.brList.indexOf("APPLE");
            curList.splice(idx, 1).toString();
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            });
        }

    }
    /**
     * Update brList for Dell checkbox changes
     */
    handleDell() {
        let curStatus = !this.state.DELL;
        let curList = this.state.brList;
        this.setState({DELL: curStatus})
        if (curStatus === true) {
            curList.push("DELL");
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.brList.indexOf("DELL");
            curList.splice(idx, 1).toString();
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            });
        }
    }

    handleAsus() {
        let curStatus = !this.state.ASUS;
        let curList = this.state.brList;
        this.setState({ASUS: curStatus})
        if (curStatus === true) {
            curList.push("ASUS");
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.brList.indexOf("ASUS");
            curList.splice(idx, 1).toString();
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            });
        }
    }

    handleMicrosoft() {
        let curStatus = !this.state.MICROSOFT;
        let curList = this.state.brList;
        this.setState({MICROSOFT: curStatus})
        if (curStatus === true) {
            curList.push("MICROSOFT");
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.brList.indexOf("MICROSOFT");
            curList.splice(idx, 1).toString();
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            });
        }
    }

    handleHp() {
        let curStatus = !this.state.HP;
        let curList = this.state.brList;
        this.setState({HP: curStatus})
        if (curStatus === true) {
            curList.push("HP");
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.brList.indexOf("HP");
            curList.splice(idx, 1).toString();
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            });
        }
    }

    handleAcer() {
        let curStatus = !this.state.ACER;
        let curList = this.state.brList;
        this.setState({ACER: curStatus})
        if (curStatus === true) {
            curList.push("ACER");
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.brList.indexOf("ACER");
            curList.splice(idx, 1).toString();
            this.setState({brList: curList}, () => {
                this.props.handleBrandUpdate(this.state.brList);
                this.props.handleQueryUpdate();
            });
        }
    }

    // handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };

    render() {
        return (
            <FormGroup>
                <FormLabel component="legend">Brand</FormLabel>
                <FormControlLabel control={<Checkbox checked={this.state.APPLE} onChange = {() => this.handleApple()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Apple" />
                <FormControlLabel control={<Checkbox checked={this.state.DELL} onChange = {() => this.handleDell()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Dell" />
                <FormControlLabel control={<Checkbox checked={this.state.ASUS} onChange = {() => this.handleAsus()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Asus" />
                <FormControlLabel control={<Checkbox checked={this.state.MICROSOFT} onChange = {() => this.handleMicrosoft()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Microsoft" />
                <FormControlLabel control={<Checkbox checked={this.state.HP} onChange = {() => this.handleHp()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="HP" />
                <FormControlLabel control={<Checkbox checked={this.state.ACER} onChange = {() => this.handleAcer()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Acer" />
            </FormGroup>
        );
    }
}