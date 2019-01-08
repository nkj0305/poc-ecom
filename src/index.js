import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import Rootreducer from './reducers';
ReactDOM.render(
 <Provider store={createStore(Rootreducer,applyMiddleware(ReduxPromise))}>
  <BrowserRouter>  
   <Route path="/" component ={App} />
  </BrowserRouter> 
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
