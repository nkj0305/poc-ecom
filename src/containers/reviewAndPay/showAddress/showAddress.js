import React,{Component} from  'react';
import './showAddress.css';

export default class ShowAddress extends Component{
    render(){
        return(
            <div className="showAddressSection">
             <div className="mainHeading">
               {this.props.keyHeading}
             </div>
             <div className="contactName">
               {this.props.name}
             </div>
             <div className="contactAddress">
               {this.props.address}
             </div>
            </div>
        );
    }
}