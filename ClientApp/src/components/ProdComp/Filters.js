import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../styles/Productsv2.css";

export class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            br: false,    // br for brand
            APPLE: false  // maybe change to array of booleans for simplicity
        };
    }

    render() {
        return (
            <div>
                <FormGroup>
                    {/* <FormLabel>Brand</FormLabel> */}
                    <FormControlLabel control={<Checkbox />} label="Apple" />
                    <FormControlLabel control={<Checkbox />} label="Dell" />
                </FormGroup>
            </div>
        );
    }
}