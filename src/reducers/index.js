import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth-reducer'
import metricReducer from './metric-reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  metrics: metricReducer
});

export default rootReducer;
