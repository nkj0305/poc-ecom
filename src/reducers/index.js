import {combineReducers} from 'redux';

import TabSelect from './delivery/reducer_tabSelect';
import getProducts from './delivery/reducer_getProducts';
import getProfile from './delivery/reducer_getProfile';
import getSelectedAddress from './delivery/reducer_handleSelectAddress';
import addNewAddress from './delivery/reducer_addAddress';


const rootReducer = combineReducers({
    tabSelected:TabSelect,
    getProducts: getProducts,
    getProfile: getProfile,
    getSelectedAddress: getSelectedAddress,
    addNewAddress:addNewAddress
});

export default rootReducer;