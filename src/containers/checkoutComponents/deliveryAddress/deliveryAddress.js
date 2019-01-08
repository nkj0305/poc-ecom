import React, { Component } from 'react';
import DeliveryPoint from './deliveryPoint/deliveryPoint';
import SelectAddress from './selectAddress/selectAddress';
import './deliveryAddress.css';

import { connect } from 'react-redux';
import appConstants from '../../../constants';
class DeliveryAddress extends Component {


  checkTabStatus() {
    if (this.props.tabSelected === appConstants.CP) {
      return (
        <SelectAddress deliveryHeading={appConstants.SELECT_CP} addressData={this.props.cpAddress} />
      );
    }
    else {
      return (
        <div>
          <SelectAddress deliveryHeading={appConstants.SELECT_DA} addressData={this.props.hdAddress} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <DeliveryPoint />
        {this.checkTabStatus()}
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    tabSelected: state.tabSelected
  }
}

export default connect(mapStateToProps)(DeliveryAddress);