import { GET_COUNTRY_ERROR, GET_COUNTRY_START, GET_COUNTRY_SUCCESS } from "../constant/country.constant";

const initialState = {
    countries: [],
    error: '',
    loading: false
}

const CountryReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case GET_COUNTRY_START: 
            return {
                ...state,
                loading: true
            }

        case GET_COUNTRY_SUCCESS: 
            return {
                ...state,
                countries: [...action.payload],
                error: '',
                loading: false
            }

        case GET_COUNTRY_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
       
        default:
            return state;
    }
}

export default CountryReducer;