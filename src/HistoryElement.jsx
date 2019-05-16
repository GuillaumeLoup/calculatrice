import React, { Component } from "react";
import "./HistoryElement.css"

class HistoryElement extends Component {
    render(){
        const res = this.props.res
        return(
            <div className="HistoryElement">
               <h1>{res.calculation}</h1>
               <h1>{res.nb}</h1>
            </div>
        )
    }
}

export default HistoryElement;