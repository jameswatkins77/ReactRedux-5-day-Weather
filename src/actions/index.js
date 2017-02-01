import axios from 'axios';

const API_KEY ='64ce48e8c7c8f6a856cbd7dde1739ea1';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}