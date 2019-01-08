import React,{Component} from  'react';
import './paymentForm.css';

export default class PaymentForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkEmptyFields = this.checkEmptyFields.bind(this);
        this.state = {
            errors:{}
        }
    }

    handleSubmit(evt){
          evt.preventDefault();
          const errorState = this.checkEmptyFields(['cardNum','month','year','cvv','holderName']);
          this.setState({errors:errorState});
          if(this.isEmpty(errorState)){
              alert(`Product purchase successful. Amount paid SR ${this.props.totalAmount}`)
          }
    }

    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    checkEmptyFields(arr){
        let errorState = {}
        arr.map((item)=>{
            if(!this.refs[item].value){
                errorState[item] = "Required"
            }
        });
        return errorState;
    }


    render(){
        return(
            <div className="paymentContainer">
              <div className="paymentFormHeading">
                Enter Payment Details
              </div>
     
              <div className="paymentFormSection">
               <form>
                <div className="row formRow">
                 <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                   <input type="text" className={"formField "+ (this.state.errors.cardNum ? "errorField":"")} placeholder="Card number" ref="cardNum"/>
                 </div>
                 <div className="col-3 col-xs-12 col-sm-3 col-md-3 col-lg-3">
                   <select className={"formField "+ (this.state.errors.month ? "errorField":"")} ref="month">
                       <option value="">MM</option>
                       <option value="1">Jan</option>
                       <option value="2">Feb</option>
                       <option value="3">Mar</option>
                       <option value="4">Apr</option>
                       <option value="5">May</option>
                       <option value="6">Jun</option>
                       <option value="7">Jul</option>
                       <option value="8">Aug</option>
                       <option value="9">Sep</option>
                       <option value="10">Oct</option>
                       <option value="11">Nov</option>
                       <option value="12">Dec</option>
                   </select>
                 </div>
                 <div className="col-3 col-xs-12 col-sm-3 col-md-3 col-lg-3">
                   <select className={"formField "+ (this.state.errors.year ? "errorField":"")} ref="year">
                       <option value="">YY</option>
                       <option value="2019">2019</option>
                       <option value="2020">2020</option>
                       <option value="2021">2021</option>
                       <option value="2022">2022</option>
                       <option value="2023">2023</option>
                       <option value="2024">2024</option>
                       <option value="2025">2025</option>
                       <option value="2026">2026</option>
                       <option value="2027">2027</option>
                       <option value="2028">2028</option>
                       <option value="2029">2029</option>
                       <option value="2030">2030</option>
                   </select>
                 </div>
                </div> 
                <div className="row formRow">
                <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <input type="text" className={"formField "+ (this.state.errors.cvv ? "errorField":"")} placeholder="CVV" ref="cvv"/>
                 </div>
                 <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                 <input type="text" className={"formField "+ (this.state.errors.holderName ? "errorField":"")} placeholder="Cardholder name" ref="holderName"/>
                 </div>
                </div> 

                <div className="row">
                 <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="paymentFormButton">
                   <button onClick={this.handleSubmit}>Confirm Payment</button>
                  </div>
                 </div>
                </div>
               </form>    
              </div>
            </div>
        );
    }
}