import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiIndex: 0,
    budget: 100,
    eatenSushi: []
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushis => {
      this.setState({
        sushis
      })
    })
  }

  getSushis = () => {
    console.log(this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4))
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  }

  moreSushi = (event) => {
    let newIndex = this.state.sushiIndex + 4

    if(this.state.sushiIndex >=96){
       alert("no more sushi")
       return
    }

    this.setState({
      sushiIndex: newIndex
    })
  }

  onSushiPick = (sushi) => {
    let newBudget = this.state.budget - sushi.price
    if(newBudget >= 0 && !this.state.eatenSushi.includes(sushi)){
      this.setState({budget: newBudget,
        eatenSushi: [...this.state.eatenSushi, sushi]
      })
    }else{
      alert("Not enough money or already eaten sushi plate")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.getSushis()}
          moreSushi={this.moreSushi}
          onSushiPick={this.onSushiPick}
          eatenSushi={this.state.eatenSushi}
        />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;