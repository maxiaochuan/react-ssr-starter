// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------

/**
 * location change
 *
 * @param {string} location
 * @returns {{type: string, payload: string}}
 */
export function locationChange (location = '/') {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

/**
 *
 * @param {{dispatch: *}}
 * @returns {function(*=): *}
 */
export const updateLocation = ({ dispatch }) => {
  return nextLocation => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null

/**
 * location reducer
 *
 * @param {object} state
 * @param {object} action
 * @returns {string|*}
 */
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE ?
    action.payload :
    state
}
