import axios from 'axios';
import appConstants from '../constants';

const productUrl = '../../mocks/products.json';
const profileUrl = '../../mocks/profile.json';



export function handleTabSelect(data){
    return{
        type:appConstants.TAB_SELECT,
        payload:data
    }
}

export function getProducts(){
    return{
        type: appConstants.GET_PRODUCTS,
        payload: axios.get(productUrl)
    }
}

export function getProfile(){
    return{
        type: appConstants.GET_PROFILE,
        payload: axios.get(profileUrl)
    }
}

export function handleSelectAddress(data){
    return{
        type:appConstants.HANLDE_SELECT_ADDRESS,
        payload:data
    }
}

export function handleAddNewAddress(data){
    return{
        type: appConstants.HANDLE_ADD_ADDRESS,
        payload:data
    }
}

export function handlePaymentProceed(data){
    return{
        type: appConstants.HANDLE_ADD_ADDRESS,
        payload:data
    }
}

export function setSelectedProduct(data={}) {
    console.log("in setSelectedProduct", data);
    return {
        type: appConstants.SET_SEL_PROD,
        payload: data
    }
}