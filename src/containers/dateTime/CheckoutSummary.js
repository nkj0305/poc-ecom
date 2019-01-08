import React from 'react';
import { connect } from 'react-redux';
import './CheckoutSummary.css';

function CheckoutSummary(props) {
    const prod = props.selectedProduct;
    console.log("Checkout Summary", prod);
    return (
        <div className="" style={{position: "Fixed", marginTop:"10px"}} >
            <div><div className="row paymentParent" dir="ltr">
                <div className="">
                    <div className="card" dir="ltr">
                        <div className="card-block pad-25">
                            <p className="payment-summary text-center hidden-sm-down"><strong>Payment summary</strong></p>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="Margin5TopBottom">Products</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="Margin5TopBottom"> {prod.currency +" " + prod.price} </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="Margin5TopBottom">Service fees</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="Margin5TopBottom">{prod.currency + " " + prod.service}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="">
                                    <span>Includes delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="MarginLeft10 Margin5TopBottom col-md-8" ><strong>Amount including VAT</strong>
                                </div>
                                <div className="col-md-3">
                                    <p className="Margin5TopBottom" >{prod.currency + " " + (Number(prod.price) + Number(prod.service)) }</p>
                                </div>
                            </div>
                        </div>
                        <div className="Margin15Top hidden-sm-down" hidden="">
                            <p className="payment-summary text-center"> Barcode authentication </p>
                            <div className="barcodesvg text-center">
                            </div>
                            <span className="Barcode-text text-center"> Present this barcode at the pick-up location</span>
                        </div>
                    </div>
                    <div className="">
                        <button className="text-uppercase  btn btn-primary col-lg-12 col-xl-12 col-md-12 Button-primary-color" id="checkoutPaymentSummaryNext" type="submit" >NEXT</button>
                    </div>
                </div>
            </div></div>
        </div>
    );
}
function mapStateToProps(state) {
    console.log("mapStateToProps in ASSEMBLY INFO", state);
    return {selectedProduct: state.selectedProduct}
}
export default connect(mapStateToProps)(CheckoutSummary);