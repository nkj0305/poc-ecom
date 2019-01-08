export default ({dispatch}) => next => action => {
 //check to see
 //if the action has a promise on its payload property
 //if it does wait for it to resolve
 //if it doesn't send it to the next middleware

 if(!action.payload || !action.payload.then){
     return next(action)
 }

 //resolve promise here
 action.payload.then((response)=>{
   const newAction = {...action,payload:response} ;
   dispatch(newAction);
 })
}
    
