import { combineReducers } from 'redux';
import { 
  LOGIN_SUCCESS, 
  LOGOUT_SUCCESS, 
  FETCH_DATA_SUCCESS, 
  UPDATE_SETTINGS_SUCCESS, 
  FETCH_SEARCH_RESULTS_SUCCESS, 
  FETCH_PROPERTY_DETAILS_SUCCESS 
} from './actions';

const initialState = {
  auth: {
    token: null,
  },
  settings: {
    theme: 'light',
    language: 'en',
  },
  data: {},
  searchResults: [],
  propertyDetails: {},
};

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.token };
    case LOGOUT_SUCCESS:
      return { ...state, token: null };
    default:
      return state;
  }
};

const settingsReducer = (state = initialState.settings, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS_SUCCESS:
      return { ...state, ...action.settings };
    default:
      return state;
  }
};

const dataReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

const searchResultsReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return action.searchResults;
    default:
      return state;
  }
};

const propertyDetailsReducer = (state = initialState.propertyDetails, action) => {
  switch (action.type) {
    case FETCH_PROPERTY_DETAILS_SUCCESS:
      return action.propertyDetails;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    auth: authReducer,
    settings: settingsReducer,
    data: dataReducer,
    searchResults: searchResultsReducer,
    propertyDetails: propertyDetailsReducer,
  });
  
  export default rootReducer;