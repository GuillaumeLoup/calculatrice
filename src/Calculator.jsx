import React, { Component } from "react";
import "./Calculator.css";


class Calculator extends Component {
    
    render() {

        return (
            <div className="Calculator">
                <div id="calculette">
                    <div className="touchesCalculette">  
                        <div onClick={this.props.getCalculation}>
                            <button id="7" value="7" >7</button>
                            <button id="8" value="8">8</button>
                            <button id="9" value="9">9</button>
                            <button className="operateurs" value="-" >-</button>
                            <button id="4" value="4">4</button>
                            <button id="5" value="5">5</button>
                            <button id="6" value="6">6</button>
                            <button className="operateurs" value="+">+</button>
                            <button id="1" value="1">1</button>
                            <button id="2" value="2">2</button>
                            <button id="3" value="3">3</button>
                            <button className="operateurs" value="/">/</button>
                            <button id="0" className="touchesBas" value="0" >0</button>
                        </div>
                        <button className="touchesBas">.</button>
                        <button className="egal touchesBas" onClick={this.props.calcul} >=</button>
                        <button className="operateurs touchesBas" value="*" onClick={this.props.getCalculation}>x</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;