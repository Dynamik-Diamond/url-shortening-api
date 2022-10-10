export const reducer = (state, action) => {
  const newUrls = [...state.urls, action.payload];
  if (action.type === 'ADD_URL') {
    return {
      ...state,
      urls: newUrls,
      errorStatus: false,
      errorMessage: '',
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      errorStatus: true,
      errorMessage: 'Please add a valid url',
    };
  }

  throw new Error('No Matching action type');
};
