import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
    render(){
        return(
            <div className="Input">
                <input className="text-input" readOnly value={this.props.value} />
            </div>
        )
    }
}

export default Input;