const initialState = {
    movie:{},
}; 

const movieDetailsReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_MOVIE_DETAILS": 
            return{
                ...state, 
                movie: action.payload.movie,
            }; 
        default: 
            return{...state}
    }
}; 


export default movieDetailsReducer; 