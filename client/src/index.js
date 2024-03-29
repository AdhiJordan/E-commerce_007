// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Navigation from './Navigation';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Navigation />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Navigation from './Navigation';
import reducers from './reducers';
import logger from "redux-logger";
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);

const createStoreWithMiddleware = (createStore(reducers, middleware));

ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
<Navigation />
</Provider>
, document.getElementById('root'));






