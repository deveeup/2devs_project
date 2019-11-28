const reducer = (state, action) => {
  switch (action.type) {
    case 'BUY_TICKET':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    case 'SELL_TICKET':
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default reducer;