const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST_AEROTRAVEL':
      return {
        ...state,
        test: [action.payload],
      };
    default:
      return state;
  };
};

export default reducer;
