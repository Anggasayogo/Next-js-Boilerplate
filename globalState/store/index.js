import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reduxThunk from 'redux-thunk' 

import rootReducer from '../reducer'
 
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['login'],
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore( persistedReducer, applyMiddleware(reduxThunk) )
  let persistor = persistStore(store)
  return { store, persistor }
}