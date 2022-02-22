
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCHING_TODOS } from '../constants/constants';
const isState = {
    name: "Javed",
    isLoggedIn: false,
    // session:[],
    wishlist: ['eat', 'code']
}

const mainReducer = (state = isState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'Register_USER':
            return {
                ...state,
                registerMessage: action.payload
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                shops:action.payload
            }        
        case 'LOGIN_DATA':
            return {
                ...state,
                loginUser:action.payload,
                loggedIn: true
            }
        case 'GET_ALL_SHOPS':
            return {
                ...state,
                shops:action.payload
            }
        case 'GET_ALL_CATEGORY':
            return {
                ...state,
                categories:action.payload
            }
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products:action.payload
            }
        case "GET_ALL_PROPOSALS":
            return {
                ...state,
                proposalsData : action.payload
            }    
        case "GET_ALL__FREE_PROJECT":
            return {
                ...state,
                allFreeProjects: action.payload
            }    
        case FETCHING_TODOS:
            return {
                ...state,
                loading: action.payload
            }
        case FETCH_TODOS_SUCCESS:
            console.log("Success Login Data"+ action.data);
            return {
                ...state,
                userData: action.data
            }
        case FETCH_TODOS_FAILURE:
            console.log("reducer Error: "+JSON.stringify(action));
            return {
                ...state,
                error: true
            }                            
    }
    return state;
}
export default mainReducer;