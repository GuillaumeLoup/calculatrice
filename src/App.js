import React, { Component } from 'react';
import './App.css';
import Calculator from "./Calculator";
import Input from "./Input";
import History from "./History";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        calculation: "",
        hist: [],
        nb: "",
        disp: ""
    }
}

getCalculation = (e) => {
    if ((isNaN(parseInt(this.state.calculation.slice(-1), 10)) 
      && isNaN(parseInt(e.target.value, 10)))
      && this.state.calculation)
      {
      alert("Ce calcul n'est pas valable")
      
    }else{
      
      let result = this.state.calculation + e.target.value;
      this.setState({
          calculation: result,
          disp: result
      })
    }
    
}


calcul = () => {
    const elemHist = {
        calculation: this.state.calculation,
        nb: eval(this.state.calculation)
    }
    let temp = [...this.state.hist]
    temp.push(elemHist)

    console.log(this.state.hist)
    this.setState({
        nb: eval(this.state.calculation),
        disp: eval(this.state.calculation),
        calculation: "",
        hist: temp


    })
}
  render(){
  return (
    <div className="App">
    <div><Input value={this.state.disp} />
      <Calculator calcul={this.calcul} getCalculation={this.getCalculation} />
    </div>
      <div className="hist-placement"><History hist={this.state.hist} /></div>
      

    </div>
  );
}
}
export default App;
