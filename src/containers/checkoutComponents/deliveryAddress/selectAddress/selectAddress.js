import React, { Component } from 'react';
import AddressContainer from './addressContainer/addressContainer';
import './selectAddress.css';
import addNewIcon from '../../../../assets/icon-addnew.svg';
import { connect } from 'react-redux';
import appConstants from '../../../../constants';
import AddDeliveryAddress from '../addDeliveryAddress/addDeliveryAddress';
import {bindActionCreators} from 'redux';
import {handleAddNewAddress} from '../../../../actions';
import { Route, Link, Redirect } from 'react-router-dom';
import {setSessionData,setLocalData} from '../../../../utilities/utility';
class SelectAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {openAddAddress : false};
    this.renderDeliveryText = this.renderDeliveryText.bind(this);
    this.handleOpenAddress = this.handleOpenAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(history){
    setSessionData(appConstants.CURRENT_STEP,appConstants.DATETIME_FLAG)
    history.push(appConstants.DATETIME_ROUTE);
  }

  handleOpenAddress(){
    this.setState({openAddAddress:true});
    this.props.handleAddNewAddress(true);
  }

  renderAddNewAddressAreaText(){
    if(this.state.openAddAddress){
      return <div></div>
    }
    else{
      return(
        <div className="addAddressArea" onClick={this.handleOpenAddress}>
        <img className="inlineEl" src={addNewIcon} alt="add address" />
        <div className="addAddressText inlineEl">Delivery Address</div>
      </div>
      );
    }
  }

  renderDeliveryText() {
    if (this.props.tabSelected === appConstants.CP)
      return (<div></div>)
    else{
      return (
        <div> 
          {this.renderAddNewAddressAreaText()}
         <div className="addNewAddress">
          <AddDeliveryAddress openAddAddress={this.state.openAddAddress} />
         </div>  
        </div> 
       );
    }  

  }

  renderCPButton(){
    if(this.props.tabSelected === appConstants.CP){
      return(        <div className="row">
      <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="buttonSection">
        <Route render={({ history }) =>(
          <button type="submit" onClick={(evt)=>{evt.preventDefault();this.handleFormSubmit(history)}} >
            NEXT
          </button>)}/>
        </div>
      </div>
    </div>);
    }
    else{
      return(<div></div>);
    }
  }
  render() {
    return (<div className="row">
      <div className="addressHeading">
        {this.props.deliveryHeading}
      </div>
      <div className="deliveryAddressContainer">
        <AddressContainer addressData={this.props.addressData} />
        {this.renderCPButton()}
      </div>
      {this.renderDeliveryText()}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    tabSelected: state.tabSelected
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    handleAddNewAddress:handleAddNewAddress
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectAddress);