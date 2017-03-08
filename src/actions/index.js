import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_USER,
  ADD_SIGNIN_EMAIL,
  QUERY_ERROR
} from './types';

const ROOT_URL = 'https://daily-metrics.herokuapp.com';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // update state to provide email
        dispatch({ type: ADD_SIGNIN_EMAIL, payload: email })
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email)
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ first_name, last_name, email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { first_name, last_name, email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        dispatch({ type: ADD_SIGNIN_EMAIL, payload: email })
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function queryError(error) {
  console.log('query error function', error)
  return {
    type: QUERY_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}

export function getUserInfo({ email }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/getuser`, { email })
    .then(response => {
      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch(queryError(err))
    })
  }
}
