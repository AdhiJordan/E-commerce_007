import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Display extends Component{
  constructor(props){
    super(props);
    this.state = {
        newName: ""
    }
    this.getName = "";
  }


 

  componentDidMount(){
    console.log("child Component componentDidMount", this.props);
  }

  componentWillReceiveProps(newProps){
    console.log("child Component componentWillReceiveProps", newProps)
    this.setState({
      newName: newProps.setName
    })
  }

  shouldComponentUpdate(newProps, newState){
      return true;
  }

  componentWillUpdate(newProps, newState){
    console.log("componentWillUpdate", newProps, newState)
    this.getName = newProps.setName;
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate", prevProps, prevState);
  }


  render(){
    
    return(
      <div>
        <h1>Display Component</h1>
        <h2>{this.state.newName}</h2>
        <h1>{this.getName}</h1>
      </div>
    );
  }
}

export default Display;
