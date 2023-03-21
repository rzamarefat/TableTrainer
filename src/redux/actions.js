import {CHANGE_DESK} from './actionTypes'


export const changeDesk = (deskName) => {
    return {
        type: CHANGE_DESK,
        payload: deskName
    }

}