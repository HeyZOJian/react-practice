import React, {
    Component
} from 'react';
import Counter from './Counter';
import Button from '@material-ui/core/Button';

export default class CounterList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:"",
            items: [],
            summary:0
        }
    }

    calculateSummary = (number)=>{
        let newSummary = this.state.summary;
        newSummary += number;
        this.setState({summary:newSummary});
    }

    addCounter = ()=>{
        let items = this.state.items.concat();
        let idCount = this.state.idCount;
        this.setState({idCount});
        items.push({calculateSummary:this.calculateSummary});
        this.setState({items});
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value);
        let items = []
        for(let i = 1;i<=event.target.value;i++){
            items.push({calculateSummary:this.calculateSummary})
        }
        this.setState({items});
      }

    // removeCounter = ()=>{
    //     let items = this.state.items.concat();
    //     let counter = items.pop();
    //     console.log(counter);
        
    //     console.log(counter._self.state.summary);
          
    //     this.setState({items});
    // }


    clear = ()=>{
        this.setState({items:[]});
        this.setState({summary:0});
        this.setState({value:''});
    }

    render() {
        let items = this.state.items;
        items = items.map((elt, i)=>{      //elt就是我们的todosData的每一项对象
        
            return (
                <Counter 
                    {...{
                        calculateSummary:elt.calculateSummary,  //每一个todo都有一个关闭按钮，所以传这个事件过去
                    }}
                    key = {i}   //这个别忘了哦，不然会报错，遍历都要加，react内部机制diff算法会用
                />
            );
        });
        return <div>
            <h1>Summary:{this.state.summary}</h1>
            <hr/>
            {items}
            
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            {/* <Button variant="fab" mini color="primary" aria-label="Add" onClick={this.addCounter}>+</Button> */}
            {/* <Button variant="fab" mini color="secondary" aria-label="Cut" onClick={this.removeCounter}>-</Button>    */}
            <Button variant="fab" mini color="primary" aria-label="clear" onClick={this.clear}>X</Button>
        </div>
    }

}