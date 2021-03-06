import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import globalTypes from './globalTypes'
import scInteractionReducer from './scInteractionReducer/scInteractionReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
}

const appReducer = combineReducers({
    scInteraction: scInteractionReducer,
})

const rootReducer = (state, action) => {
    if (action.type === globalTypes.LOG_OUT) {
        storage.removeItem('persist:root')
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
