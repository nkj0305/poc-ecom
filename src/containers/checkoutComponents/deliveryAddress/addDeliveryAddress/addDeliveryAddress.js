import React,{Component} from 'react';
import './addDeliveryAddress.css';

import axios from 'axios';
import {connect} from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom';
import appConstants from '../../../../constants';
import {setSessionData,setLocalData} from '../../../../utilities/utility';

const CITY_URL = '../../../../../mocks/geLocation.json';

class AddDeliveryAddress extends Component{

    constructor(props){
        super(props);
        this.currentCity = '';
        this.state = {
            city:'',
            districts:[],
            errors:{}
        }
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.currentAddress = {
          name:'',
          address:''
        }
    }

    handleChangeCity(e){
        if(e.target.value && (e.target.value != this.currentCity)){
         this.getDistricts(e.target.value)
        }
        this.setState({city:e.target.value});
        this.currentCity = e.target.value;
    }

    getDistricts(val){
     axios.get(CITY_URL).then((data)=>{
        this.setState({districts:data.data[val]})
     });
    }

    populateDistricts(){
        if(!this.state.districts || this.state.districts.length==0) return(<option value="">select District</option>)
        return this.state.districts.map((item)=>{
            return(<option key={item}>{item}</option>);
     })
    }

    

     isEmpty(obj) {
      return Object.keys(obj).length === 0;
     }

     moveToDateTime(history){
      setSessionData(appConstants.CURRENT_STEP,appConstants.DATETIME_FLAG);
  
      if(this.currentAddress){
        setLocalData(appConstants.SELECTED_ADDRESS,this.currentAddress)
      }
     
      history.push(appConstants.DATETIME_ROUTE);
     }
  
     handleFormSubmit(history){
      console.log("--------------->",this.currentAddress)
        //when an address was selected
        if(!this.props.addNewAddress){
          this.moveToDateTime(history);
        }
        else{
        //when an address was added
        const errorState = this.checkForEmptyValues(['city','district','address','city','firstname','familyname','email','mobileNumber']);
        this.setState({errors:errorState});
         if(this.isEmpty(errorState)){
           this.currentAddress.name = this.refs.firstname.value+ " " + this.refs.familyname.value;
           this.currentAddress.address = this.refs.address.value+ ", " + this.refs.city.value + ", " + this.refs.district.value;
           this.moveToDateTime(history);
          }
        }

        
      }

    checkForEmptyValues(arr){
      let errorState = {}
      arr.map((item) => {
        if(!this.refs[item].value){
          errorState[item] = 'Required';
        }
      });
      return errorState;
      
 
    }


    renderAddressArea(){
        if(this.props.openAddAddress){
            return(<div>

                     <form >
          <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 addDeliveryAddressHeading">
              Delivery Address 
            </div>
            <div className="col-6 col-xs-12 col-md-6 col-sm-6 col-lg-6">
              
                <div className="col-12  customLabel">City</div>
                <select name ="city" className={"formFields"+(this.state.errors.city ? " errorField":"")}
                 placeholder="Select City" onChange={this.handleChangeCity} ref="city">
                    <option value="">Select City</option>
                    <option value="city1">City1</option>
                    <option value="city2">City2</option>
                    <option value="city3">City3</option>
                </select>

            </div> 
            <div className="col-6 col-xs-12 col-md-6 col-sm-6 col-lg-6">
                <div className="col-12  customLabel">District</div>
                <select component="select" name ="district"
                 className={"formFields"+(this.state.errors.district ? " errorField":"")}
                  placeholder="Select District" ref="district">
                {this.populateDistricts()}
                </select>

            </div> 
          </div>  
         

          <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="boldHeadings">Address Details</div>
            </div>
          </div>
          
          <div className="row">
           <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <div className="col-12  customLabel">Address</div>
             <input type="text" name="address" ref="address"
              className={"formFields"+(this.state.errors.address ? " errorField":"")}/>
           </div>
          </div>


          <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="boldHeadings">Personal Details</div>
            </div>
          </div>
          
          <div className="row">
        
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="col-12  customLabel">First name</div>
            <input type="text" name="firstname" ref="firstname"
             className={"formFields"+(this.state.errors.firstname ? " errorField":"")} />
 
            </div>
         
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="col-12  customLabel">Family name</div>
            <input type="text" name="familyname" ref="familyname"
             className={"formFields"+(this.state.errors.familyname ? " errorField":"")} />
     
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="col-12  customLabel">Email</div>
            <input type="email" name="email" ref="email"
             className={"formFields"+(this.state.errors.email ? " errorField":"")} />
      
            </div>
            <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="col-12  customLabel ">Mobile number</div>
            <input type="text" name="mobileNumber" ref="mobileNumber"
             className={"formFields mobileNumber"+(this.state.errors.mobileNumber ? " errorField":"")} />
  
            </div>
          </div>




        </form>
            </div>)
        }
        return <div> </div>
    }

    render(){
       return(<div> 
       {this.renderAddressArea()}
       <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="buttonSection">
              <Route render={({ history }) =>(
                <button type="submit" onClick={(evt)=>{evt.preventDefault();this.handleFormSubmit(history)}} >
                  NEXT
                </button>
                )}/>

                
              </div>
            </div>
          </div>
       </div>
       );
    }
}

function mapStateToProps(state){
  return{
    addNewAddress :state.addNewAddress
  }
}

export default connect(mapStateToProps)(AddDeliveryAddress);