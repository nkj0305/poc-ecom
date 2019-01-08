import appConstants from '../../constants';
import {setLocalData} from '../../utilities/utility';
export default function(state={},action){
  if(action.type === appConstants.GET_PRODUCTS){
      setLocalData(appConstants.PRODUCT_LIST,action.payload.data);
      return action.payload.data;
  }
  else{
      return state;
  }
}