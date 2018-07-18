import React, { Component } from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
        this.add = this.add.bind(this);
        this.cut = this.cut.bind(this);
      }

    add(){
        this.setState({number: this.state.number+1});
    }

    cut(){
        this.setState({number: this.state.number-1});
    }

    render() {
       return <div className="Counter-div">
            <Card >
            <CardContent>{this.state.number}
            </CardContent>
            </Card>
            <Button variant="contained" color="primary" onClick={this.add}>+</Button>
            <Button variant="contained" color="secondary" onClick={this.cut}>-</Button>   
        </div>
    }
}

export default Counter;