import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from "../reducer/country.reducer";
import createSagaMiddleware from 'redux-saga'
import country from "../saga/country.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: CountryReducer,
    middleware: [sagaMiddleware],
    devTools: true
})

sagaMiddleware.run(country)

export default store;