export default function(state=[],action){
    if(action.type === 'POST_COMMENT'){
        return state.concat(action.payload)

    }
    return state;
}