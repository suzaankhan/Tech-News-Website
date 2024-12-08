
const reducer = (currentState, action) => {
    
    switch(action.type){
        case "GET_STORIES":
            return {
                ...currentState, 
                hits : action.payload.hits,
                page : action.payload.page,
                nbPages : action.payload.nbPages,
                isLoading : false
            };
        case "REMOVE_POST":
            return {
                ...currentState,
                hits : currentState.hits.filter((curItem) => {
                    return curItem.objectID !== action.payload.objectID;
                })
            }
        case "SEARCH_POST":
            return {
                ...currentState,
                query : action.payload
            };
        case "PREV_PAGE":
            return {
                ...currentState,
                page : currentState.page - 1,
                isLoading : true
            }
        case "NEXT_PAGE":
            return {
                ...currentState,
                page : currentState.page + 1,
                isLoading : true
            }
    }
}

export default reducer;