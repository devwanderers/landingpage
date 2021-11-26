import { createSelector } from 'reselect'

export const mintReducerSelector = createSelector(
    (state) => state.mint,
    (mint) => mint
)
