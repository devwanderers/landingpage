import { createReducer } from '@reduxjs/toolkit'
import * as mintAction from './actions'

const initialState = {
    minting: {},
    minted: {},
}

const scInteractionReducer = createReducer(initialState, (builder) => {
    builder.addCase(mintAction.setMinting, (state, { payload }) => ({
        ...state,
        minting: { ...state.minting, ...payload },
    }))
    builder.addCase(mintAction.setMinted, (state, { payload }) => ({
        ...state,
        minted: { ...state.minted, ...payload },
    }))
    builder.addCase(mintAction.clearMinted, (state) => ({
        ...state,
        minted: {},
    }))
    builder.addCase(mintAction.clearMinting, (state) => ({
        ...state,
        minting: {},
    }))
})

export default scInteractionReducer
