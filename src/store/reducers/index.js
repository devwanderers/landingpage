import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import globalTypes from './globalTypes'
import mintReducer from './mint/mintReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mint'],
}

const appReducer = combineReducers({
    mint: mintReducer,
})

const rootReducer = (state, action) => {
    if (action.type === globalTypes.LOG_OUT) {
        storage.removeItem('persist:root')
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
