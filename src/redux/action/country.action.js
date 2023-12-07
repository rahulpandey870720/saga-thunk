import { GET_COUNTRY_ERROR, GET_COUNTRY_START, GET_COUNTRY_SUCCESS } from "../constant/country.constant";

export const getCountryStart = (d) => ({
    type: GET_COUNTRY_START,
    payload: d
})

export const getCountrySuccess = (data) => ({
    type: GET_COUNTRY_SUCCESS,
    payload: data
})

export const getCountryError = (error) => ({
    type: GET_COUNTRY_ERROR,
    payload: error
})
