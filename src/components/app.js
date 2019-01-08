import React,{Component} from 'react';
import CommentBox from '../containers/commentBox';
import {Route,Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleAuth} from '../actions';
import Checkout from '../containers/checkoutComponents/checkout';
import DateTime from '../containers/dateTime/dateTime';
import ReviewAndPay from '../containers/reviewAndPay/reviewAndPay';
import Ikealogo from "../assets/IKEA-logo.png";
import ItemList from '../containers/itemlist/itemlist';


import './app.css';
class App extends Component{
    constructor(props){
        super(props);
        this.handleAuthClick = this.handleAuthClick.bind(this);
    }

    handleAuthClick(val){
        this.props.handleAuth(val);
    }

    renderButton(){
        if(!this.props.auth){
            return(
                <button onClick={()=>{this.handleAuthClick(true)}}>
                   Sign in
                </button>)
        }
        else{
            return(
                <button onClick={()=>{this.handleAuthClick(false)}}>
                   Sign out
                </button>)
        }

    }
    render(){
        return(
            <div>

              {/* <div className="headerContainer">
                <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/post">Post Comment</Link>
                    </li>   
                    <li>
                         {this.renderButton()}
                    </li>
                </ul>
              </div> */}

              <div className="row ikeaHeader">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                   <img src={Ikealogo} alt="ikea logo" />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                    <div className="returnCart"><Link to="/allitems">Return to Cart</Link> </div>
                  </div>
              </div>  
              <div className="routeContainer">
              <Route path="/allitems" component={ItemList}/>   
               <Route path="/checkout/delivery" component={Checkout}/>
               <Route path="/checkout/dateTime" component={DateTime}/>
               <Route path="/checkout/reviewAndPay" component={ReviewAndPay}/>
               <Route exact path="/" render={() => (<Redirect to="/allitems" />)} /> 
               <Route exact path="/checkout" render={() => (<Redirect to="/checkout/delivery" />)} /> 
               <Route path="/post" component={CommentBox} />

              </div> 

            </div>);
    }
    
}

function mapStateToProps(state){
  return{
      auth:state.auth
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      handleAuth:handleAuth
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);