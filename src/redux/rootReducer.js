import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authReducer } from '../components/pages/auth/slices'
import { dashboardReducer } from '../components/pages/dashboard/slices'

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
}

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['csrfToken', 'userInfo'],
}

const dashboardPersistConfig = {
  key: 'dashboard',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['userProfile'],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  dashboard: persistReducer(dashboardPersistConfig, dashboardReducer),
})

export default rootReducer
