import React, { Component } from 'react';
import './style.css';
import Button from "../Button";
import Link from "../Link";

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      isBlock: false,
    }
  }

  toggle = () => {
     this.setState((oldState)=>{
        return {
          isBlock : !oldState.isBlock,
        }
     });
  }
  

  render() {
    return (
      <div className="App">
        <Button onClick={this.toggle}>click me</Button>
        <br/>
        <Button block = {this.state.isBlock} color="green">click me</Button>
        <br/>
        <Button block = {this.state.isBlock} color="red">click me</Button>
        <br/>
        <Link className="Link--red">adsad</Link>
        <br/>
        <Link className="Link--blue" href="http://www.google.com">google</Link>
      </div>
    );
  }
}

export default App;
