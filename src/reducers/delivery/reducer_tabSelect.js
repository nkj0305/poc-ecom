import appConstants from '../../constants';
export default function(state=appConstants.HD,action){

  if(action.type === appConstants.TAB_SELECT){
    return action.payload;
  }
  else{
    return state;
  }

}