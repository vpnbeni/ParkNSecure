export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_PROPERTY_DETAILS_SUCCESS = 'FETCH_PROPERTY_DETAILS_SUCCESS';
export function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}

export function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data };
}