const rootReducer = (state, action) => {
  // if (action.type === "SET_ARTICLES") {
  //   return {
  //     ...state,
  //     articles: action.payload,
  //   };
  // } else if (action.type === "SET_ACTIVE_ARTICLE") {
  //   return {
  //     ...state,
  //     activeArticle: action.payload
  //   }
  // } else {
  //   return { ...state };
  // }
  switch (action.type) {
    case "SET_ARTICLES":
      return {
      ...state,
      articles: action.payload,
    };
    case "SET_ACTIVE_ARTICLE":
          return {
      ...state,
      activeArticle: action.payload
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
