import {
  DATA_FETCH_INITIATED,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILED,
  SEARCH_QUERY,
} from './../Type/githubCompareType';

const initialState = {
  gitDataLoading: true,
  gitData: [],
  gitDataerror: null,
  searchQueryValue: null,
};

const githubReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        searchQueryValue: action.data,
      };
    case DATA_FETCH_INITIATED:
      return {
        ...state,
        gitDataLoading: true,
        gitData: null,
        gitDataerror: null,
      };
    case DATA_FETCH_SUCCESS:
      state.gitData.push(action.payload);
      return {
        gitDataLoading: false,
        gitData: state.gitData,
        gitDataerror: null,
      };
    case DATA_FETCH_FAILED:
      return {
        ...state,
        gitDataLoading: false,
        gitData: null,
        gitDataerror: action.gitError,
      };

    default:
      return state;
  }
};

export default githubReducer;
