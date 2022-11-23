import React, { Component } from 'react';
import FormGroup from '@mui/material/FormGroup';

// import "../styles/Productsv2.css";

// cool slider stuff doesnt work yet
// therefore using forms instead for now

export class MemoryFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minVal: 0,
            maxVal: 128,
        };
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
        //this.handleMaxMemory = this.handleMaxMemory.bind(this);
        //this.handleMinMemory = this.handleMinMemory.bind(this);

    }

    handleMinChange(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            this.setState({ minVal: 0});
        }
        if((event.target.value <= 128 && event.target.value >= 0) || !event.target.value) {
            this.setState({ minVal: event.target.value },
                () => {
                    //this.props.handleMemoryUpdate(this.state.minVal, this.state.maxVal)
                });
        } else {
            this.setState({ minVal: 0},
            () => {
                //this.props.handleMemoryUpdate(this.state.minVal, this.state.maxVal)
                alert("min value must be greater than or equal to 0 and min must be a number");
            });
        }
    }
    handleMaxChange(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            this.setState({ maxVal: 128});
        }
        if((event.target.value >= 0 && event.target.value <= 128)  || !event.target.value) {
            this.setState({ maxVal: event.target.value },
                () => {
                    //this.props.handleMemoryUpdate(this.state.minVal, this.state.maxVal)
                });
        } else {
            this.setState({ maxVal: 128},
            () => {
                //this.props.handleMemoryUpdate(this.state.minVal, this.state.maxVal)
                alert("max value must be less than or equal to 128 and max must be a number");
            });
        }
    }

    handleMemory() {
        console.log(this.state.minVal + " " + this.state.maxVal);
        if(Number(this.state.minVal) > Number(this.state.maxVal)) {
            alert("min value is greater than max value");
            this.setState({minVal: 0, maxVal: 128});
        } else {
            this.props.handleMemoryUpdate(this.state.minVal, this.state.maxVal);
        }
    }
    render() {
        return (
            <FormGroup>
                <form onSubmit={this.handleMemory}>
                    <label>
                        Min Memory:
                        <input type="text" value={this.state.minVal} onChange={this.handleMinChange} />
                    </label>
                </form>
                <form onSubmit={this.handleMemory}>
                    <label>
                        Max Memory:
                        <input type="text" value={this.state.maxVal} onChange={this.handleMaxChange} />
                    </label>
                    <button onClick={()=>this.handleMemory()} type='button'>submit</button> 
                </form>
            </FormGroup>
        );
    }
}