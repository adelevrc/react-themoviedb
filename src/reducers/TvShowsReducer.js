const initialState = {
    popular : [],
}

const tvShowsReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_TV_SHOWS":
            return {
                ...state, 
                popular: action.payload.popular,
            }; 
        default:
            return {
                ...state
            }
    }
}

export default tvShowsReducer; 