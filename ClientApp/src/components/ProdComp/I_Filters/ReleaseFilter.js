import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import "../styles/Productsv2.css";

export class ReleaseFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TWENTYONE: false,
            TWENTYTWO: false,
            relList: [],
        };

        this.handleTwentyOne = this.handleTwentyOne.bind(this);
    }

    handleTwentyOne() {
        let curStatus = !this.state.TWENTYONE;
        let curList = this.state.relList;
        this.setState({TWENTYONE: curStatus})
        if (curStatus === true) {
            curList.push("2021");
            this.setState({relList: curList}, () => {
                this.props.handleReleaseUpdate(this.state.relList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.relList.indexOf("TWENTYONE");
            curList.splice(idx, 1).toString();
            this.setState({relList: curList}, () => {
                this.props.handleReleaseUpdate(this.state.relList);
                this.props.handleQueryUpdate();
            });
        }

    }

    handleTwentyTwo() {
        let curStatus = !this.state.TWENTYTWO;
        let curList = this.state.relList;
        this.setState({TWENTYTWO: curStatus})
        if (curStatus === true) {
            curList.push("2022");
            this.setState({relList: curList}, () => {
                this.props.handleReleaseUpdate(this.state.relList);
                this.props.handleQueryUpdate();
            }); 
        } else {
            let idx = this.state.relList.indexOf("TWENTYTWO");
            curList.splice(idx, 1).toString();
            this.setState({relList: curList}, () => {
                this.props.handleReleaseUpdate(this.state.relList);
                this.props.handleQueryUpdate();
            });
        }
    }

    render() {
        return (
            <FormGroup>
                <FormLabel component="legend">Release Year</FormLabel>
                <FormControlLabel control={<Checkbox checked={this.state.TWENTYONE} onChange = {() => this.handleTwentyOne()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="2021" />
                <FormControlLabel control={<Checkbox checked={this.state.TWENTYTWO} onChange = {() => this.handleTwentyTwo()} sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}/>} label="2022" />
            </FormGroup>
        );
    }
}