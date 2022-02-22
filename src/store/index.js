import React from 'react';
import { createStore, combineReducers, compose } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import formReducer from './formReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  formStore: formReducer,
  orderStore: orderReducer,
  cartStore: cartReducer,
  appStore: appReducer,
});

const initialState = {};
const store = createStore(rootReducer, initialState);
export default store;
