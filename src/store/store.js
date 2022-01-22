import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";
import RootReducer from "../reducers/index";

const middleWares = [ReduxThunk];

const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);

export const store = createStoreWithMiddleWare(RootReducer);