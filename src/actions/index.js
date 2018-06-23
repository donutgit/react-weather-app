import axios from 'axios';

const API_KEY = "3d5159112079a2bb9fe2e645e23a9d70";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// action creator returning an action with type FETCH_WEATHER
export function fetchWeather(city) { // сабмитим форму и запускаем Action Creator, которопу передаем city введенный в input
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    console.log('request', request)

    return {
        type: FETCH_WEATHER,
        payload: request
        // Закидываем реквест (промис) в payload, redux-promise видит что это промис,
        // ждет resolve, и подставляет результат в payload
    }
}