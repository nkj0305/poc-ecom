import React from 'react';
import { connect } from 'react-redux';
function AssemblyInfo(props) {
    if (props.selectedProduct.assembly) {
        return (
            <div>
                <div className="Assembly-not-availab">Assembly is available</div>
                <div className="Sorry-assembly-is-n">Assembly is available in your location. Choose on checkout</div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="Assembly-not-availab">Assembly not available</div>
                <div className="Sorry-assembly-is-n">Sorry, assembly is not available in your location.</div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    console.log("mapStateToProps in ASSEMBLY INFO", state);
    return {selectedProduct: state.selectedProduct}
}
export default connect(mapStateToProps)(AssemblyInfo);