import appConstants from '../../constants';
import {setLocalData} from '../../utilities/utility';
export default function(state={},action){
  if(action.type === appConstants.GET_PROFILE){
      setLocalData(appConstants.PROFILE,action.payload.data);
      return action.payload.data;
  }
  else{
      return state;
  }
}