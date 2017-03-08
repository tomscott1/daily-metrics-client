import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_USER,
  ADD_SIGNIN_EMAIL,
  QUERY_ERROR
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    case FETCH_USER:
      return { ...state, user: action.payload}
    case ADD_SIGNIN_EMAIL:
      return { ...state, signedInEmail: action.payload}
    case QUERY_ERROR:
      return { ...state, query_error: action.payload}
  }

  return state;
}
