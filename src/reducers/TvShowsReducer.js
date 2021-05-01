const initialState = {
    popularTvShows : [],
    topRatedTvShows: [],
}

const tvShowsReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_TV_SHOWS":
            return {
                ...state, 
                popularTvShows: action.payload.popularTvShows,
                topRatedTvShows: action.payload.topRatedTvShows,
            }; 
        default:
            return {
                ...state
            }
    }
}

export default tvShowsReducer; 