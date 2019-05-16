import React, { Component } from "react";
import HistoryElement from "./HistoryElement";


class History extends Component {
    render(){
        return(
            <div className="History">
            {
                this.props.hist.map(calc => <HistoryElement res={calc} />
                )} 
            </div>
        )
    }
}

export default History;