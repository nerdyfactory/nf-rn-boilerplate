import {
  combineReducers
} from 'redux'
import configureStore from './@configureStore'
import rootSaga from './Sagas'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  app: require('./AppRedux').reducer,
  nav: require('./NavRedux').reducer
})

export default () => {
  let {
    store,
    sagasManager,
    sagaMiddleware
  } = configureStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('./Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
