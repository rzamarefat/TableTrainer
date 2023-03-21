import initialState from "./initiaState"
import { CHANGE_DESK, UPLOAD } from "./actionTypes";


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DESK:
            return {
                ...state, deskSection: action.payload
            }
        case UPLOAD:
            return {
                ...state, 
                dataframe: action.payload,
            }

        
        default:
            return state;
    }

}


export default reducer