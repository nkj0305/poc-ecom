export default function(state=null,action){
    if(action.type === 'HANDLE_AUTH'){
        return action.payload;
    }

    else{
        return state;
    } 
   
}