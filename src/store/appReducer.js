const initState = {
  location: {},
  address: '',
  uid: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADDLOCATION':
      return {
        ...state,
        ...action.payload,
      };

    case 'ADDUID':
      return {
        ...state,
        uid: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
