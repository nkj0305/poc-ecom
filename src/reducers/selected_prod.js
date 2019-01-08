import appConstants from '../constants';
export default function selectedProd(state = [], action ) {
    console.log("selectedProd reducer", action);
    if (action.type === appConstants.SET_SEL_PROD) {
        console.log("IN REDUCER IF")
        return action.payload
    } else {
        return state;
    }
}