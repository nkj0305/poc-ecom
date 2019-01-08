import React, {Component} from 'react';
import BreadCrumb from '../breadCrumb/breadCrumb';
import Payment from '../checkoutComponents/payment/payment';
import PaymentForm from './paymentForm/paymentForm';
import ShowAddress from './showAddress/showAddress';
import Products from './products/products'
import './reviewAndPay.css'
import {getLocalData} from './../../utilities/utility';
import appConstants from '../../constants';
export default class ReviewAndPay extends Component{
    constructor(props){
        super(props);
        this.productData = {
            productPrice:0,
            vat:0,
            serviceFee:0
        };

        this.startDate = {
         date:'',
         time:''
        };
        this.endDate = {
            date:'',
            time:''
        }
        this.currentAddress = {};
        this.calculatePayment = this.calculatePayment.bind(this);      
        this.getSelectedAddress = this.getSelectedAddress.bind(this);
            
    }

    formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }

    getDeliveryInfo(){
       let deliveryInfoStart = new Date(getLocalData(appConstants.START_TIME));
       let deliveryInfoEnd = new Date(getLocalData(appConstants.END_TIME));
       let deliveryInfoStartDate = this.formatDate(deliveryInfoStart);
       let deliveryInfoEndDate = this.formatDate(deliveryInfoEnd)
       this.startDate.date = deliveryInfoStartDate;
       this.endDate.date = deliveryInfoEndDate;
       this.currentAddress = getLocalData(appConstants.SELECTED_ADDRESS);
    }

    getSelectedAddress(){
        
    }

    componentWillMount(){
        this.calculatePayment();
        this.getSelectedAddress();
        this.getDeliveryInfo();
    }

    calculatePayment(){      
        const productData = getLocalData(appConstants.PRODUCT_LIST);
        if (!productData) return;
        let itemPrice = 0;
        productData.products.map((item)=>{
          itemPrice += parseInt(item.qty) * parseInt(item.price);
        });
        this.productData.productPrice = itemPrice;
   
        this.productData.serviceFee = appConstants.SERVICE_FEE;
        this.productData.vat = itemPrice+ appConstants.VAT * itemPrice+ this.productData.serviceFee;
        
    }
  
    render(){
        return(<div>
            <BreadCrumb />
            <div className="row ReviewAndPayContent">
                <div className="col-md-8 col-sm-8 col-lg-8 col-xs-12">
                <div className="row">
                 <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                     <ShowAddress keyHeading="Delivery and billing address" name={this.currentAddress.name} address={this.currentAddress.address}/>
                 </div>
                 <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                     <ShowAddress keyHeading="Delivery date & time" name="To be delivered between" address={this.startDate.date + " - " + this.endDate.date} />
                 </div>
                </div>
                <div className="row">
                 <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-1g-12">
                    <Products />
                 </div>
                </div>
                <div className="row">
                 <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-1g-12">
                     <PaymentForm totalAmount={this.productData.vat}/>
                 </div>
                </div>
               
                 
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
                 <Payment productPrice={this.productData.productPrice} vat={this.productData.vat} serviceFee={this.productData.serviceFee}/>
                </div>
            </div>
           
            
            </div>);
    }
}