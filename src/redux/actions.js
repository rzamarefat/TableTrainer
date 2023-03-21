import {CHANGE_DESK, UPLOAD} from './actionTypes'



export const changeDesk = (deskName) => {
    return {
        type: CHANGE_DESK,
        payload: deskName
    }

}

export const upload = (imageFile) => {
    return {
        type: UPLOAD,
        payload: imageFile
    }
}