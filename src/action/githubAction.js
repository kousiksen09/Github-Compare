import {
  HANDLER_CLICKED,
  DATA_FETCH_INITIATED,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILED,
  SEARCH_QUERY,
} from './../Type/githubCompareType';

export const handlerClicked = (userName) => {
  return {
    type: HANDLER_CLICKED,
    userName,
  };
};

export const dataFetchInitated = () => {
  return {
    type: DATA_FETCH_INITIATED,
  };
};

export const dataFetchSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};

export const dataFetchFailure = (gitError) => {
  return {
    type: DATA_FETCH_FAILED,
    gitError,
  };
};

export const searchQuery = (data) => ({
  type: SEARCH_QUERY,
  data,
});
