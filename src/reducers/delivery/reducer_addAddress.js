import appConstants from '../../constants';
export default function addAddress(state=null,action){
    if(action.type === appConstants.HANDLE_ADD_ADDRESS){
        return action.payload
    }
    return state;
}