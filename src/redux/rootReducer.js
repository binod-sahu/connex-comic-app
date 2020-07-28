import { combineReducers } from 'redux'
import comicReducer from './comics/comicReducer';

const rootReducer = combineReducers({
    comic: comicReducer
})

export default rootReducer