import {GET_WEATHER_LOADING,GET_WEATHER_SUCCESS,GET_WEATHER_FAIL} from "../TypesActions/Types";
import { axios } from "axios" ;
export const getWeather = (query) => async dispatch => {
    dispatch({ type: GET_WEATHER_LOADING})
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=09047bcf8b8545acaed203509220802&q=${query}&days=10&aqi=no&alerts=no`)
        dispatch({ type: GET_WEATHER_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_WEATHER_FAIL, payload: error })
        console.log(error)
    }
}