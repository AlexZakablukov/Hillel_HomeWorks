import React, { Component } from 'react';
import './style.css';
import Button from "../Button";
import Link from "../Link";
import Icon from "../Icon";
import withIcon from  "../hocs/withIcon"

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
  };
  

  render() {
      const ButtonWithIcon = withIcon("Button")(Button);
      const LinkWithIcon = withIcon("Link")(Link);
    return (
      <div className="App">
        <Button onClick={this.toggle}>click me</Button>
          <br/>
        <Button block = {this.state.isBlock} color="green">click me</Button>
        <br/>
        <Button block = {this.state.isBlock} color="red">click me</Button>
          <hr/>
        <br/>
        <Link className="Link--red">adsad</Link>
        <br/>
        <Link className="Link--blue" to="http://www.google.com">google</Link>
        <hr/>
        <Icon name="google"></Icon>
          <hr/>
        <ButtonWithIcon iconName={"google"} color={"black"}>Google</ButtonWithIcon>
        <br/>
        <LinkWithIcon iconName={"google"} to={"http://www.google.com"} target={"_blank"}>Google</LinkWithIcon>

      </div>
    );
  }
}

export default App;
