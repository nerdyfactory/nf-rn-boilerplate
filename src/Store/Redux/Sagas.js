import {
  takeLatest,
  all
} from 'redux-saga/effects'

/* ------------- Types ------------- */

import { AppTypes } from './AppRedux'

/* ------------- Sagas ------------- */

import * as AppSagas from './AppSagas'

/* ------------- API ------------- */

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(AppTypes.STARTUP_REQUEST, AppSagas.startup),
  ])
}
