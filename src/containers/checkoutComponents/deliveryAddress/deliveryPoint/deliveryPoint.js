import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deliveryIcon from '../../../../assets/ic-home-delivery.svg';
import collectionPointIcon from '../../../../assets/payCollect.svg';
import { handleTabSelect, handleSelectAddress } from '../../../../actions';
import './deliveryPoint.css';
import appConstants from '../../../../constants';
import {getLocalData} from '../../../../utilities/utility'
class DeliveryPoint extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: appConstants.HD
    }
    this.handleTabClick = this.handleTabClick.bind(this);
    this.addresses = getLocalData(appConstants.PROFILE);
  }

  handleTabClick(tabVal) {
    this.setState({ activeTab: tabVal });
    this.props.handleTabSelect(tabVal);
    const address = this.addresses['addresses'][tabVal];
    this.props.handleSelectAddress(this.addresses['addresses'][tabVal][0]);
  }

  renderActiveButton() {
    return (
      <div className="activeRadio">
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className={"col-sm-6 col-md-6 col-xs-6 col-lg-6 tabDiv " + (this.state.activeTab === appConstants.HD ? 'activeDiv' : '')} onClick={() => this.handleTabClick(appConstants.HD)}>
            <div className="radio inlineEl hiddenMobile">
              {this.renderActiveButton()}
            </div>
            <div className="imageEl inlineEl">
              <img src={deliveryIcon} alt="deliveryIcon" />
            </div>
            <div className="Text inlineEl">
              <p className="boldText">Delivery</p>
              <p>Ship my order to my delivery address</p>
            </div>
          </div>
          <div className={"col-sm-6 col-md-6 col-xs-6 col-lg-6 tabDiv " + (this.state.activeTab === appConstants.CP ? 'activeDiv' : '')} onClick={() => this.handleTabClick(appConstants.CP)}>
            <div className="radio inlineEl hiddenMobile">
              {this.renderActiveButton()}
            </div>
            <div className="imageEl inlineEl">
              <img src={collectionPointIcon} alt="collectionPointIcon" />
            </div>
            <div className="Text inlineEl">
              <p className="boldText">Click & Collect</p>
              <p>Receive my order from the closest pick-up location. I’ll pick it up myself.</p>
            </div>
          </div>
        </div>
      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleTabSelect: handleTabSelect,
    handleSelectAddress:handleSelectAddress
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(DeliveryPoint);