import React, { Component } from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
      }

    add = ()=>{
        this.setState({number: this.state.number+1});   
        this.props.calculateSummary(1);
    }

    cut = ()=>{
        this.setState({number: this.state.number-1});
        this.props.calculateSummary(-1);
    }

    render() {
       return <div className="Counter-div">
            <span>{this.state.number}</span>
            <Button variant="fab" mini color="primary" aria-label="Add" onClick={this.add}>+</Button>
            <Button variant="fab" mini color="secondary" aria-label="Cut" onClick={this.cut}>-</Button>
        </div>
    }

}

export default Counter;