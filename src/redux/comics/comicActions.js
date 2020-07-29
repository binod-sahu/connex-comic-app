import { FATCH_COMIC_START, FATCH_COMIC_SUCCESS, FATCH_COMIC_FAILURE } from './comicActionTypes'
import axios from 'axios'

export const fatchComicStart = () => {
    return {
        type: FATCH_COMIC_START
    }
}

export const fatchComicSuccess = comic => {
    return {
        type: FATCH_COMIC_SUCCESS,
        payload: comic
    }
}

export const fatchComicFailure = error => {
    return {
        type: FATCH_COMIC_FAILURE,
        payload: error
    }
}


export const fatchComic = () => {
    return (dispatch) => {
        dispatch(fatchComicStart())
        axios.get('/info.0.json')
        .then(response => {
            const comic = response.data
            setTimeout(() => dispatch(fatchComicSuccess(comic)), 1000)            
        })
        .catch(error => {
            const message = error.message
            dispatch(fatchComicFailure(message))
        })
    }
}
