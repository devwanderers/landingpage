import { createAction } from '@reduxjs/toolkit'

export const setMinting = createAction('data/minting')
export const clearMinting = createAction('data/minting/clear')
export const clearMinted = createAction('data/minted/clear')
export const setMinted = createAction('data/minted')
export const setData = createAction('data/setData')
export const clearData = createAction('data/clearData')
