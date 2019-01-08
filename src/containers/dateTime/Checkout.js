import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { LoadCheckOut } from './actions/Actions';
import CheckoutSummary from './CheckoutSummary';
import CheckoutOrderDetails from './CheckoutOrderDetails';
import { getLocalData } from '../../utilities/utility';
import appConstants from '../../constants';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props)
    }
    componentDidMount() {
        
    }
    render() {
        
        return (
            <div className="row">
                <div className="col-md-8">
                    <CheckoutOrderDetails />
                </div>
                <div className="col-md-4">
                    <CheckoutSummary />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return state;
}


export default connect(mapStateToProps)(Checkout);
