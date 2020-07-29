import { FATCH_COMIC_START, FATCH_COMIC_SUCCESS, FATCH_COMIC_FAILURE } from './comicActionTypes'

const initialState = {
    isLoading: false,
    data: {},
    error: ''
}

const comicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FATCH_COMIC_START: 
            return {
                ...state,
                isLoading: true
            }
        case FATCH_COMIC_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case FATCH_COMIC_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}

export default comicReducer;