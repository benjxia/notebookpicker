
import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { Slider } from '@mui/material';
import { useState } from 'react';

// import "../styles/Productsv2.css";

// cool slider stuff doesnt work yet

export class MemoryFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GBval: [],
            memList: [],
        };
        this.handleMemType = this.handleMemType.bind(this);
    }


    handleMemType() {
        let min = this.GBval[0];
        let max = this.GBval[1];
        this.setState({GBval: [min, max]});
        if(min !== 0 || max !== 128) {
            this.props.handleMemoryUpdate(min, max);
        }
        console.log(this.state.GBval[0]);
        /*
        this.props,handleMemoryUpdate(this.state.)
        let curList = this.state.memList;
        if (min <= 8 && max >= 8) {
            curList.push(8);
            this.setState({memList: curList}, () => {
                this.props.handleMemoryUpdate(this.state.memList);
            }); 
        } else {
            let idx = this.state.memList.indexOf(8);
            curList.splice(idx, 1).toString();
            this.setState({memList: curList}, () => {
                this.props.handleMemoryUpdate(this.state.memList);
            });
        }
        if(min <= 16 && max >= 16) {
            curList.push(8);
            this.setState({memList: curList}, () => {
                this.props.handleMemoryUpdate(this.state.memList);
            }); 
        } else {
            let idx = this.state.memList.indexOf(16);
            curList.splice(idx, 1).toString();
            this.setState({memList: curList}, () => {
                this.props.handleMemoryUpdate(this.state.memList);
            });
        }
        */
    }
    render() {
        return (
            <FormGroup>
                <FormLabel component="legend">Memory</FormLabel>
                <Slider
                value={this.state.GBval}
                getAriaLabel={() => 'Memory range'}
                valueLabelDisplay="on"
                step={2}
                style={{ width: 128 }}
                aria-labelledby="range-slider"
                marks
                min={0}
                max={128}
                onChange={() => this.handleMemType()}
                />
            </FormGroup>
        );
    }
}