export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [], // Set the basket to an empty array
      };

    case "DECREASE_QUANTITY":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Unable to remove product with id: ${action.id} because it is not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
