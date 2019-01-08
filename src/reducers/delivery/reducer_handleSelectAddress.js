import appConstants from '../../constants';
export default function getSelectedAddress(state=null,action){
    if(action.type === appConstants.HANLDE_SELECT_ADDRESS){
      return action.payload;
    }
    return state;
}