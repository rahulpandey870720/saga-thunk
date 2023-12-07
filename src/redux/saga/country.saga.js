import { takeLatest, put, delay } from 'redux-saga/effects'
import { GET_COUNTRY_START } from '../constant/country.constant'
import { getCountryError, getCountrySuccess } from '../action/country.action';
import { getCountries } from '../service/country.service';

function* getCountryStart() {
    try {
        yield delay(2000);
        
        let data = yield getCountries();

        yield put(getCountrySuccess(data))

    } catch (error) {
        yield put(getCountryError(error.message))
    }
}

export default function* country() {
    yield takeLatest(GET_COUNTRY_START, getCountryStart)
}
