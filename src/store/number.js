'use strict'

export const NUMBER_ADD = 'NUMBER_ADD'

export function numberAdd (number) {
  return {
    type: NUMBER_ADD,
    payload: number,
  }
}

const initialState = 0

export default function numberReducer (state = initialState, action) {
  switch (action.type) {
    case NUMBER_ADD:
      return Object.assign({}, state, action.payload)
      break
    default:
      return state
  }
}
