const initialState = {
    popular : [],
    topRated : [], 
    upcoming : [], 
    nowPlaying: []
}

const moviesReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {
                ...state, 
                popular: action.payload.popular
            }; 
        default:
            return {
                ...state
            }
    }
}

export default moviesReducer; 