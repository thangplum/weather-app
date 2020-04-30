import thunk from 'redux-thunk';
import logger from "redux-logger";
import { ApplyMiddleware, createStore, applyMiddleware } from 'redux';
import reducers from "./reducers/weatherReducer";

//reducers


//middleware
const middleware = applyMiddleware(thunk, logger);

//store
const store = createStore(reducers, middleware);

export default store;