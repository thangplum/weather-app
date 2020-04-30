import { combineReducer } from "redux";
import { weatherReducer } from "./weatherReducer";

//combine reducers 
const reducers = combineReducer({
    WeatherInfo: weatherReducer
});

export default reducers;