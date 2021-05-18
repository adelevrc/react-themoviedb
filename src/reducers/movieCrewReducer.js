const initialState = {
    credits: {},
};

const movieCreditsReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_MOVIE_CREDITS":
            return{
                ...state,
                credits: action.payload.credits,
                isLoading: false,
            };
        default:
            return{...state}
    }
};


export default movieCreditsReducer;

