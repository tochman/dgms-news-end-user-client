const rootReducer = (state, action) => {

  if (action.type === 'SET_ARTICLES') {
    return {
      ...state,
      articles: action.payload
    }
  } else {
    return { ...state };
  }
};

export default rootReducer;
