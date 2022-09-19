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
        };

        this.handleApple = this.handleApple.bind(this);
    }

    handleApple() {
        this.setState({APPLE: !this.state.APPLE})
        // TODO: update query string with handleBrandUpdate in parent
        this.props.handleQueryUpdate();
    }

    // handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };

    render() {
        return (
            <FormGroup>
                <FormLabel component="legend">Brand</FormLabel>
                <FormControlLabel control={<Checkbox checked={this.state.APPLE} onChange = {() => this.handleApple()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Apple" />
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Dell" />
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Asus" />
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Microsoft" />
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="HP" />
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="Acer" />
            </FormGroup>
        );
    }
}