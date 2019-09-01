import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {deleteProductFromCart} from './actions/products';

class Cart extends Component{

	state = {
		displayProduct: []
	}

	componentDidMount(){
		console.log(this.props)
		if(this.props.getProducts){
			this.setState({
				displayProduct: this.props.getProducts
			})
		}
	}

	componentWillReceiveProps(newProps){
		console.log(newProps)
		if(newProps.getProducts){
			this.setState({
				displayProduct: newProps.getProducts
			})
		}
	}

	deleteProduct(id){
		this.props.deleteProductFromCart(id);
	}

	render(){
		return(
			<div>
				<Link to="/">Go to Product Section</Link>
				{(this.state.displayProduct.map((data, index) => {
					return(
						<div className="row">
							<div className="col-sm-12 col-md-6 col-lg-6">
								<img src={data.image} width="100%" />
								<button onClick={this.deleteProduct.bind(this, index)}></button>
							</div>
						</div>
					);
				}))}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		getProducts: state.product.product
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deleteProductFromCart: deleteProductFromCart}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);