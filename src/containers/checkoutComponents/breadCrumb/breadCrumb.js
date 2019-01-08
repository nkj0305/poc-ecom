import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './breadCrumb.css';
export default class BreadCrumb extends Component {
  render() {
    return (<div>
      <div className="breadCrumbHeader row">
        <div className="borders col-sm-3 col-lg-3 col-xs-3 col-md-3">

        </div>
        <div className="col-sm-6 col-lg-6 col-xs-6 col-md-6 borders">
          <Route render={({ history }) => (
            <div className="delivery activeLink linkdirects col-sm-4 col-lg-4 col-xs-4 col-md-4" onClick={() => { history.push('/checkout/delivery') }}>
              <div className="linkImage">
              </div>
              <div className="linkText">
                Delivery
            </div>

            </div>
          )} />

          <Route render={({ history }) => (
            <div className="dateTime  linkdirects col-sm-4 col-lg-4 col-xs-4 col-md-4" onClick={() => { history.push('/checkout/dateTime') }}>
              <div className="linkImage">
              </div>
              <div className="linkText">
                Date & Time
            </div>

            </div>
          )} />

          <Route render={({ history }) => (
            <div className="reviewPay linkdirects col-sm-4 col-lg-4 col-xs-4 col-md-4" onClick={() => { history.push('/checkout/reviewAndPay') }}>
              <div className="linkImage">
              </div>
              <div className="linkText">
                Review And Pay
            </div>

            </div>
          )} />


        </div>
        <div className="borders col-sm-3 col-lg-3 col-xs-3 col-md-3">

        </div>
      </div>

    </div>)
  }
}