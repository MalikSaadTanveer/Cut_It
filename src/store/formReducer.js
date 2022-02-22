const initState = {
  customerRegisterForm: {},
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADDTO':
      return {
        ...state,
        ...action.payload,
      };

    case 'UPDATETD':
      return {
        ...state,
        ...action.payload,
      };

    case 'REMOVE':
      return state.filter((st) => st !== action.payload.type);

    default:
      return state;
  }
};

export default formReducer;
