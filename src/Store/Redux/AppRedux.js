import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startupRequest: null,
  startupSuccess: null,
  startupFailure: ['error'],

  counterIncrease: null,
  counterDecrease: null,
  
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  startedUp: null,
  counter: 0
})

/* ------------- Selectors  ------------- */
export const AppSelectors = {
}

/* ------------- Reducers ------------- */

/* Will be called once the Redux Rehydrate is called, only once when app starts */
export const startupSuccess = (state) =>
state.merge({ startedUp: true })

export const startupFailure = (state, { error }) =>
  state.merge({ error })

export const counterIncrease = (state) =>
  state.merge({ counter: state.counter + 1 })

export const counterDecrease = (state) =>
  state.merge({ counter: state.counter - 1 })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP_SUCCESS]: startupSuccess,
  [Types.STARTUP_FAILURE]: startupFailure,

  [Types.COUNTER_INCREASE]: counterIncrease,
  [Types.COUNTER_DECREASE]: counterDecrease
})
