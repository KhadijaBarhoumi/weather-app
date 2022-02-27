import {GET_WEATHER_LOADING,GET_WEATHER_SUCCESS,GET_WEATHER_FAIL} from "../TypesActions/Types"

const initialState = { loading: false, weather: {}, errors: null }
export const weatherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_WEATHER_LOADING:
            return { ...state, loading: true }
        case GET_WEATHER_SUCCESS:
            return { ...state, weather: payload, loading: false }
        case GET_WEATHER_FAIL:
            return { ...state, errors: payload, loading: false }
        default:
            return state
    }
}