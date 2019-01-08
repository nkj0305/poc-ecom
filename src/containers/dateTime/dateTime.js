import React, { Component } from 'react';
import BreadCrumb from '../breadCrumb/breadCrumb';
import Checkout from './Checkout';
import Payment from '../checkoutComponents/payment/payment'
import { getLocalData ,setSessionData} from '../../utilities/utility'
import appConstants from '../../constants';
import Products from '../reviewAndPay/products/products';
import CalenderHolder from '../dateTime/CheckoutOrderDetails';
import { Route, Link, Redirect } from 'react-router-dom';


export default class dateTime extends Component {

    constructor(props) {
        super(props);
        this.calculatePayment = this.calculatePayment.bind(this);
        this.productData = {
            productPrice: 0,
            vat: 0,
            serviceFee: 0
        };
    }

    handleSubmit(history){
        setSessionData(appConstants.CURRENT_STEP,appConstants.REVIEWPAY_FLAG)
        history.push(appConstants.REVIEWPAY_ROUTE);
    }

    componentWillMount() {
        this.calculatePayment();
    }

    calculatePayment() {
        const productData = getLocalData(appConstants.PRODUCT_LIST);
        if (!productData) return;
        let itemPrice = 0;
        productData.products.map((item) => {
            itemPrice += parseInt(item.qty) * parseInt(item.price);
        });
        this.productData.productPrice = itemPrice;

        this.productData.serviceFee = appConstants.SERVICE_FEE;
        this.productData.vat = itemPrice + appConstants.VAT * itemPrice + this.productData.serviceFee;

    }


    render() {
        return (<div>
            <BreadCrumb />
            <div className="row">
                <div className="col-4 col-md-8 col-sm-8 col-lg-8 col-xs-12">
                    <div className="row">
                        <div className="col-12 col-xs-12 col-md-12 col-sm-12 col-lg-12">
                            <Products />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-xs-12 col-md-12 col-sm-12 col-lg-12">
                            <CalenderHolder />
                        </div>
                    </div>

                </div>
                <div className="col-4 col-md-4 col-sm-4 col-lg-4 col-xs-12">
                    <Payment productPrice={this.productData.productPrice} vat={this.productData.vat} serviceFee={this.productData.serviceFee} />
                </div>
            </div>
            <div className="row">
                <div className="buttonSection">
                <Route render={({ history }) =>(
                     <button onClick={(evt)=>{evt.preventDefault();this.handleSubmit(history)}}>NEXT</button>
                )} />
                   
                </div>
            </div>

        </div>);
    }
}