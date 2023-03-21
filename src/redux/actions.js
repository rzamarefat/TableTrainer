import {CHANGE_DESK, CHOOSE_LAYER_TYPE, SET_COLUMNS_NAMES, SET_DATA_VALUES, SET_NUMBER_OF_DATAROWS_TO_BE_SHOWN, UPDATE_DATASET_INFO, UPLOAD} from './actionTypes'



export const changeDesk = (deskName) => {
    return {
        type: CHANGE_DESK,
        payload: deskName
    }

}

export const upload = (file) => {
    return {
        type: UPLOAD,
        payload: file
    }
}

export const setColumnNames  = (names) =>{
    return {
        type: SET_COLUMNS_NAMES,
        payload: names
    }


}


export const setDataValues  = (datavalues) =>{
    return {
        type: SET_DATA_VALUES,
        payload: datavalues
    }
}


export const updataDatasetInfo = (info) => {
    return {
        type: UPDATE_DATASET_INFO,
        payload: info,

    }
}

export const setNumberOfDataRowsToShow = (number) => {
    return {
        type: SET_NUMBER_OF_DATAROWS_TO_BE_SHOWN,
        payload: number,

    }
}

export const chooseLayerType = (layerType) => {
    return {
        type: CHOOSE_LAYER_TYPE,
        payload: layerType
    }
}