const initialState = {
    movie:{},
    isLoading: true
}; 

const movieDetailsReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_MOVIE_DETAILS": 
            return{
                ...state, 
                movie: action.payload.movie,
                isLoading: false,
            }; 
        case "LOADING_DETAIL":
            return{
                ...state, 
                isLoading: true,
            }
        default: 
            return{...state}
    }
}; 


export default movieDetailsReducer; 