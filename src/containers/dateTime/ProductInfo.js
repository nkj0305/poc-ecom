import React from 'react';
import { connect } from 'react-redux';
function ProductInfo(props) {
    console.log("ProductInfo PROPS", props)
    return (
        <div id="collapseDelivery" className="collapse show" style={{ maxHeight: "410px" }}>
            <div>
                <div className="clearfix"></div>
                <div className="row  paddingTop15">
                    <div className="col-3 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                        <img className="img-fluid imgHeightWidth" src={props.selectedProduct.imgUrl}>
                        </img>
                    </div>
                    <div className="col-9 col-sm-9 col-lg-9 col-md-9 col-xl-9 paddingleft" dir="ltr">
                        <p className="GODMORGON">{props.selectedProduct.name}</p>
                        <p className="Wash-stand">{props.selectedProduct.type}</p>
                        <p className="SR-995 fontWeight100"><span className="font-weight700">SR 995</span> x1</p>
                        <p className="Grey-turquoise-Width hidden-sm-down marginBottom0">{props.selectedProduct.color}</p>
                        <p className="Grey-turquoise-Width hidden-sm-down marginBottom0">{props.selectedProduct.desc} </p>
                        
                        <div className="row">
                            <div className="col-6 col-sm-6 col-xl-6 col-md-6 col-lg-6">
                                <font className="Article-Number-123 hidden-sm-down">Article Number : </font>
                                <font className="Article-Number-123-mobile"> 902.567.27</font>
                            </div>
                            <div className="col-6 col-sm-6 col-xl-6 col-md-6 col-lg-6">
                                <p className="x-SR-1500  float-right" style={{marginRight:"10px"}} ><strong>SR 995</strong></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("mapStateToProps", state);
    return {selectedProduct: state.selectedProduct}
}
export default connect(mapStateToProps)(ProductInfo);