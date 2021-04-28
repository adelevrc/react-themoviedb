const initialState = {
    popularTvShows : [],
    topRated: [],
}

const tvShowsReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_TV_SHOWS":
            return {
                ...state, 
                popularTvShows: action.payload.popularTvShows,
                topRated: action.payload.topRated,
            }; 
        default:
            return {
                ...state
            }
    }
}

export default tvShowsReducer; 