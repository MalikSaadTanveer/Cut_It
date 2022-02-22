const initState = {
  cart: [],
  total: 0,
  totalTime: 0,
  totalClient: 0,
  date: '',
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADDTOBAG':
      return {
        ...state,
        ...action.payload,
      };
    case 'ADDINBAG':
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

    case 'COUNTTOTALBAG':
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

    case 'APPLYCOUPON':
      let calculateTotal = state.total - action.payload;
      return {
        ...state,
        total: calculateTotal,
        discount: action.payload,
      };

    case 'REMOVECOUPON':
      let calculateTotalAfterRemoveCoupon = state.total + state.discount;
      return {
        ...state,
        total: calculateTotalAfterRemoveCoupon,
        discount: 0,
      };

    case 'REMOVEFROMBAG':
      let newRemovedArray = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: newRemovedArray,
      };

    case 'ADDMAINSERVICE':
      return {
        ...state,
        mainService: action.payload,
      };

    case 'ADDDATE':
      return {
        ...state,
        date: action.payload,
      };

    case 'REMOVEBAG':
      return (state = {
        cart: [],
        total: 0,
        totalTime: 0,
        totalClient: 0,
        date: '',
      });

    default:
      return state;
  }
};

export default orderReducer;
