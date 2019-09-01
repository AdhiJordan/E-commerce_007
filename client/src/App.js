import React, {Component} from 'react';
import NavBar from './components/navBar';
import DisplayProducts from './components/DisplayProducts';
import axios from 'axios';

class App extends Component{
  state={
    products: []
  }

  componentDidMount(){
    axios.get(`http://images.stockal.com/api/products.json`)
    .then(response => {
      console.log(response)
      this.setState({
        products: response.data.data.products
      })
    })
    .catch(error => {
      console.log(error.response)
    })
  }


  render(){
    return(
      <div>
        <NavBar />
        <DisplayProducts products={this.state.products} />
      </div>
    );
  }
}

export default App;
