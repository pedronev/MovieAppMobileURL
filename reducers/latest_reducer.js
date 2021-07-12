import { latestActions } from '../actions/index';

const initialState = {
  data: [],
  error: null,
  requesting: false,
};
const latestReducer = (state = initialState, action) => {
  switch (action.type) {
    case latestActions.PENDING: {
      return { ...state, requesting: true };
    }
    case latestActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case latestActions.REJECTED: {
      return { ...state, requesting: false, error: 'error' };
    }
    default: {
      return state;
    }
  }
};

export default latestReducer;