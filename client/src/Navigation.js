import React, {Component} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';
import App from './App';
import Cart from './Cart';
import Home from './Home';
import Display from './Display';
import NoMatch from './NoMatch';

export default class Navigation extends Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/cart" component={Cart} />
					<Route component={NoMatch} />
				</Switch>
			</BrowserRouter>
		);
	}

}