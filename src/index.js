import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Greeting } from "./greeting.js";


class Body extends React.Component{
  getname(){
    var name;
    //name = prompt("Enter your name", "");
    return name;
  }
  render(){
    return(
      <div>
        <Greeting name={this.getname()} />
      </div>
    );
  }
}


ReactDOM.render(<Body />, document.getElementById('root'));

