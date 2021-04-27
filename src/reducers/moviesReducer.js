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
                popular: action.payload.popular,
                upcoming:action.payload.upcoming,
                topRated:action.payload.topRated,
                nowPlaying:action.payload.nowPlaying,


            }; 
        default:
            return {
                ...state
            }
    }
}

export default moviesReducer; 