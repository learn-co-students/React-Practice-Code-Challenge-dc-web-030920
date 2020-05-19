import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super();
    this.state = {
      sushis: [],
      index: 0,
      emptyPlates: [],
      remainingMoney: 75
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then( sushis => this.setState({ sushis }))
  }

  onClickToEat = (props) => {
    //first have to verify if we have enoughmoney and that it hasn't already been eaten 
    if (props.price > this.state.remainingMoney ) {
      alert("You don't have enough money!")
    } else if (this.state.emptyPlates.includes(props) ) {
      alert("This sushi has already been eaten!")
    }
    else {
    console.log(props.id)

    //calculate new price and add eaten plate to eaten array 
    let newBalance = this.state.remainingMoney - props.price
    let newEatenPlate = [props, ...this.state.emptyPlates]

    this.setState({
      remainingMoney: newBalance,
      emptyPlates: newEatenPlate 
    })

    }
  }

  onClickForMore = () => {
    let newIndex = (this.state.index+4 )
    this.setState({
      index: newIndex
    })
  }


  render() {
    const sushiToRender = this.state.sushis.slice(this.state.index, (this.state.index+4))

    return (
      <div className="app">
        <SushiContainer sushis={sushiToRender} eaten={this.state.emptyPlates} morePlease={this.onClickForMore} index={this.state.index} onClickToEat={this.onClickToEat} />
        <Table remaining={this.state.remainingMoney} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;