import getlatest from '../services/getData';

const latestActions = {
  PENDING: 'FETCH_LATEST_PENDING',
  FULFILLED: 'FETCH_LATEST_FULFILLED',
  REJECTED: 'FETCH_LATEST_REJECTED',
};

const fetchlatest = () => (dispatch) => {
  dispatch({ type: latestActions.PENDING });

  getlatest()
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: latestActions.FULFILLED, payload: responseJSON }))
    .catch(error => dispatch({ type: latestActions.REJECTED, payload: error }));
};


export {
    latestActions,
    fetchlatest
};


  