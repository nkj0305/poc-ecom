import React, { Component } from 'react';

import { Route, Link, Redirect } from 'react-router-dom';



import Checkout from '../containers/checkoutComponents/checkout';
import DateTime from '../containers/dateTime/dateTime';
import ReviewAndPay from '../containers/reviewAndPay/reviewAndPay';
import Ikealogo from "../assets/IKEA-logo.png";
import ItemList from '../containers/itemlist/itemlist';


import './app.css';
export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row ikeaHeader">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                        <img src={Ikealogo} alt="ikea logo" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                        <div className="returnCart"><Link to="/allitems">Return to Cart</Link> </div>
                    </div>
                </div>
                <div className="routeContainer">
                    <Route path="/allitems" component={ItemList} />
                    <Route path="/checkout/delivery" component={Checkout} />
                    <Route path="/checkout/dateTime" component={DateTime} />
                    <Route path="/checkout/reviewAndPay" component={ReviewAndPay} />
                    <Route exact path="/" render={() => (<Redirect to="/allitems" />)} />
                    <Route exact path="/checkout" render={() => (<Redirect to="/checkout/delivery" />)} />
                </div>

            </div>);
    }

}

