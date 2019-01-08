import React,{Component} from 'react';
import BreadCrumb from '../breadCrumb/breadCrumb';
import Payment from './payment/payment'
import DeliveryAddress from './deliveryAddress/deliveryAddress';
import {Route,Link,Redirect} from 'react-router-dom';

import './checkout.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts,getProfile} from '../../actions';
import {getLocalData} from '../../utilities/utility';
import appConstants from '../../constants';
class Checkout extends Component{
    constructor(props){
       super(props);
       this.productData = {
         productPrice:0,
         vat:0,
         serviceFee:0
       }
       this.addressData = {addresses:{CP:{},HD:{}}}
       this.calculatePayment = this.calculatePayment.bind(this);
       this.populateAddress = this.populateAddress.bind(this);
    }

    componentDidMount(){
      // this.props.getProducts();
      this.props.getProfile();
      
    }

    calculatePayment(){      
      const productData = getLocalData(appConstants.PRODUCT_LIST);
      if (!productData) return;
      let itemPrice = 0;
      productData.products.map((item)=>{
        itemPrice += parseInt(item.qty) * parseInt(item.price);
      });
      this.productData.productPrice = itemPrice;
      this.productData.vat = itemPrice+ 0.10 * itemPrice;
    }

    populateAddress(){
      this.addressData = getLocalData(appConstants.PROFILE);
    }

    returnAddress(address,key){
      if(!address)
        return;
      else{
        return address.addresses[key];
      }
      
    }

    render(){
      this.calculatePayment();
      this.populateAddress();
      return(
      <div>
        <BreadCrumb />
        <div className="row checkoutContent">
          <div className="col-md-8 col-sm-8 col-lg-8 col-xs-12">
           <DeliveryAddress hdAddress={this.returnAddress(this.addressData,'HD')} cpAddress={this.returnAddress(this.addressData,'CP')}/>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
           <Payment productPrice={this.productData.productPrice} vat={this.productData.vat} serviceFee={this.productData.serviceFee}/>
          </div>
        </div>
        
      </div>  );
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getProducts:getProducts,
    getProfile:getProfile
  },dispatch);
}

function mapStateToProps(state){
  return {
    productList:state.getProducts
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);