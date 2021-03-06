const initialState = []

function commentReducer (state = initialState, action){
    switch(action.type) {        

        case "GET_COMMENTS":
            return action.comments

        case "ADD_COMMENT":
            return [...state, action.comment]

        default: 
            return state
    }
}

export default commentReducer; 