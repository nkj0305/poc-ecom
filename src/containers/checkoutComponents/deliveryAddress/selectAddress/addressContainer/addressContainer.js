import React,{Component} from 'react';
import './addressContainer.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {handleSelectAddress} from '../../../../../actions';
import {setLocalData} from '../../../../../utilities/utility';
import appConstants from '../../../../../constants';
class AddressContainer extends Component{

    constructor(props){
      super(props);
      this.renderAddressData = this.renderAddressData.bind(this);
      this.checkIfCurrentItemSelected = this.checkIfCurrentItemSelected.bind(this);
      if(this.props.addressData &&  this.props.addressData.length>0){
        this.currentId = this.props.addressData[0].id;
        setLocalData(appConstants.SELECTED_ADDRESS,this.props.addressData[0]);
      }
    }

    handleAddressSelection(data){
     this.props.handleSelectAddress(data);
    }


    checkIfCurrentItemSelected(id){
    
      if(this.props.getSelectedAddress){
        this.currentId = this.props.getSelectedAddress.id;
        setLocalData(appConstants.SELECTED_ADDRESS,this.props.getSelectedAddress);
      }
      if(this.currentId === id){
       return true;
      }
      return false;
    }

    renderAddressData(){
      
      if(!this.props.addressData){
        return;
      }
     
      return this.props.addressData.map((item)=>{
        return(
          <div className="row" key={item.name}>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
              <div className="card">
                <div className="inlineEl radio" onClick={()=>{this.handleAddressSelection(item)}}>
                  <div className={(this.checkIfCurrentItemSelected(item.id)? "activeRadioSelected":"")}>
                  </div>
                </div>
                <div className="inlineEl savedAddress">
                  <div className="name">
                    {item.name}
                  </div>
                  <div className="address">
                    {item.address}
                  </div>
                </div>
              </div>
             </div>          
          </div>);
      });
    }
    render(){
      return(
       
        <div>
         {this.renderAddressData()}
        </div>
      )
    }
}

function mapStateToProps(state){
  return{
    getSelectedAddress:state.getSelectedAddress
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    handleSelectAddress:handleSelectAddress
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressContainer);