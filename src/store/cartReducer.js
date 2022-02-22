const initState = {
  cart: [],
  total: 0,
  totalTime: 0,
  totalClient: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      let idAlreadyExists = state.cart.filter(
        (item) => item.id === action.payload.id
      );

      let chosenIds = state.cart.slice();

      if (action.payload.price > 0) {
        if (idAlreadyExists) {
          let newids = chosenIds.filter(
            (item) => item.id !== action.payload.id
          );
          newids.push(action.payload);
          chosenIds = newids;
        } else {
          chosenIds.push(action.payload);
        }
      } else {
        chosenIds = state.cart.filter((item) => item.id !== action.payload.id);
      }

      return {
        ...state,
        cart: chosenIds,
      };

    case 'COUNTTOTAL':
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        if (isNaN(state.cart[i].price)) {
          continue;
        }
        total += Number(state.cart[i].price);
      }

      let totalTime = 0;
      for (let i = 0; i < state.cart.length; i++) {
        if (isNaN(state.cart[i].time)) {
          continue;
        }
        totalTime += Number(state.cart[i].time);
      }

      return {
        ...state,
        total: total,
        totalTime: totalTime,
      };

    case 'TOTALCLIENT':
      return {
        ...state,
        totalClient: action.payload,
      };

    case 'REMOVEFROMCART':
      let newRemovedArray = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: newRemovedArray,
      };

    case 'EMPTYCART':
      return (state = {
        cart: [],
        total: 0,
        totalTime: 0,
        totalClient: 0,
      });

    default:
      return state;
  }
};

export default cartReducer;
