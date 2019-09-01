import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendProduct} from './../actions/products.js'

class DisplayProducts extends Component{

	state = {
		getProducts: [], 

		productName: "",
		productImage: "",
		productSizes: "",


		selectedproductName: "",
		selectedProductImage: "",
		selectedProductQuantity: "",
		selectedProductSizes: ""

	}

	componentWillReceiveProps(newProps){
		console.log(newProps)
		this.setState({
			getProducts: newProps.products
		})
	}

	selectedProducts(name, img, sizes){
		this.setState({
			productName: name,
			productImage: img,
			productSizes: sizes
		})
		
	}

	quantitySelect(e){
		this.setState({
			selectedProductQuantity: e.target.innerHTML
		})

	}

	sizeSelect(e){
		this.setState({
			selectedProductSizes: e.target.innerHTML
		})
	}

	addProductToCarts(img, name , e){
		e.preventDefault();
		this.setState({
			selectedproductName: name,
			selectedProductImage: img
		}, () => {
			let obj = {};
			obj['name'] = this.state.selectedproductName;
			obj['image'] = this.state.selectedProductImage;
			obj['quantity'] = this.state.selectedProductQuantity;
			obj['size'] = this.state.selectedProductSizes;
			this.props.sendProduct(obj);
			this.setState({
				productName: "",
				productImage: "",
				productSizes: "",
				selectedproductName: "",
				selectedProductImage: "",
				selectedProductQuantity: "",
				selectedProductSizes: ""
			})
		})

	}

	render(){
		return(
			<div className="container">
				<div className="row">
					{(this.state.getProducts.map((product, index) => {
						return(
							<div className="col-sm-12 col-md-6 col-lg-6 mb-4 mt-4 ">
								<div className="row boxDesign">
									<div className="col-sm-12 col-md-6 col-lg-6 borderDesign">
										<img src={product.searchImage} alt={product.productName} width="100%" />
									</div>
									<div className="col-sm-12 col-md-6 col-lg-6">
										<h5>{product.productName}</h5>
										<h4>Price: $ {product.price}</h4>
										<h5>Brand: {product.brand}</h5>
										<h5>Sizes: {product.sizes}</h5>
										<button className="btn btn-success mt-4"  data-toggle="modal" data-target="#exampleModal" onClick={this.selectedProducts.bind(this, product.productName,  product.searchImage, product.sizes)}>Buy</button>
									</div>
								</div>
							</div>
						);
					}))}
				</div>
				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">{this.state.productName}</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body contentDisplay">
				        	<img src={this.state.productImage} alt={this.state.productName} width="100%" />

				        <div className="row mt-5">
				        	<div className="col-sm-12 col-md-6 col-lg-6">
					        	<div class="dropdown">
								  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    Quantity
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={this.quantitySelect.bind(this)}>
								    <a class="dropdown-item">1</a>
								    <a class="dropdown-item">2</a>
								    <a class="dropdown-item">3</a>
								    <a class="dropdown-item">4</a>
								    <a class="dropdown-item">5</a>
								  </div>
								</div>
							</div>

							<div className="col-sm-12 col-md-6 col-lg-6 sizeDrop">

								<div class="dropdown">
								  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    Sizes
								  </button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={this.sizeSelect.bind(this)}>
								    	{(this.state.productSizes.split(',').map((data) => {
								    		return(
								    			<a class="dropdown-item">{data}</a>
								    		)
								    	}))}
								  </div>
								</div>

							</div>
				      </div>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
				        <button type="button" class="btn btn-primary" onClick={this.addProductToCarts.bind(this, this.state.productImage, this.state.productName)}>Add to Carts</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>

		);
	}
}

function mapStateToProps(state){
	return{

	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({sendProduct: sendProduct}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayProducts);