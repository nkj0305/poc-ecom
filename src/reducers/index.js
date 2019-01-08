import {combineReducers} from 'redux';
import CommentList from './reducer_commentList';
import Auth from './reducer_auth';
import TabSelect from './delivery/reducer_tabSelect';
import getProducts from './delivery/reducer_getProducts';
import getProfile from './delivery/reducer_getProfile';
import getSelectedAddress from './delivery/reducer_handleSelectAddress';
import addNewAddress from './delivery/reducer_addAddress';
import selectedProd from './selected_prod';

const rootReducer = combineReducers({
    commentList: CommentList,
    auth:Auth,
    tabSelected:TabSelect,
    getProducts: getProducts,
    getProfile: getProfile,
    getSelectedAddress: getSelectedAddress,
    addNewAddress:addNewAddress,
    selectedProduct: selectedProd
});

export default rootReducer;