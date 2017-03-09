import {
  GET_METRICS,
  QUERY_ERROR
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_METRICS:
      return { ...state, list: action.payload }
    case QUERY_ERROR:
      return { ...state, query_error: action.payload}
  }

  return state
}
