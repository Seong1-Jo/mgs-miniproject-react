// Search Data
const INITIAL_SEARCH_DATA = {
  docs: [],
};

export const searchReducer = (state = INITIAL_SEARCH_DATA, action) => {
  switch (action.type) {
    case 'addNews':
      return {
        docs: [...action.payload],
      };

    default:
      return state;
  }
};
