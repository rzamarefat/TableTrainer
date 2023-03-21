import initialState from "./initiaState"
import { CHANGE_DESK, SET_COLUMNS_NAMES, SET_DATA_VALUES, SET_NUMBER_OF_DATAROWS_TO_BE_SHOWN, UPDATE_DATASET_INFO, UPLOAD } from "./actionTypes";


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

        case SET_COLUMNS_NAMES:
            return {
                ...state,
                columnsnames: action.payload,
            }

        case SET_DATA_VALUES:
            return {
                ...state,
                datavalues: action.payload
            }

        case UPDATE_DATASET_INFO:
            return {
                ...state,
                datasetInfo: action.payload
            }

        case SET_NUMBER_OF_DATAROWS_TO_BE_SHOWN:
            return {
                ...state,
                numberOfRowsToShow: action.payload
            }
        

        
        default:
            return state;
    }

}


export default reducer