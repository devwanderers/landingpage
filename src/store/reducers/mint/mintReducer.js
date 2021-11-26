import { createReducer } from '@reduxjs/toolkit'
import { saveMintData } from './actions'

const initialState = {
    minting: {},
    minted: {},
}

const mintReducer = createReducer(initialState, (builder) => {
    builder.addCase(saveMintData, (state, { payload }) => ({
        ...state,
        minting: { ...state.minting, ...payload },
    }))
})

export default mintReducer
