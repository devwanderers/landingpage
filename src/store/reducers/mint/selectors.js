import { createSelector } from 'reselect'

export const dataReducerSelector = createSelector(
    (state) => state.data,
    (data) => data
)
