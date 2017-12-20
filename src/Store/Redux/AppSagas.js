import AppActions from '../Redux/AppRedux'
import { put } from 'redux-saga/effects'

export function * startup (action) {
  try {
    yield put(AppActions.startupSuccess())
  } catch (e) {
    yield put(AppActions.startupFailure(e))
  }
}
