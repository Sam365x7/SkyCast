import axios from 'axios';
import {OPEN_WEATHER_KEY} from '@env';
import {GEO_API_URL, WEATHER_API_URL} from '../utils/urls';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 10000,
});

export const fetchGeoData = async (city: string) => {
  try {
    const response = await axiosInstance.get(GEO_API_URL, {
      params: {
        q: city,
        limit: 1,
        appid: OPEN_WEATHER_KEY,
      },
    });

    if (!response.data.length) {
      throw new Error('Please enter valid city');
    }

    return response.data[0];
  } catch (error) {
    console.log('fetchGeoData', error);
    throw new Error('Please enter valid city');
  }
};

export const fetchWeatherData = async (lat: number, lon: number) => {
  try {
    const response = await axiosInstance.get(WEATHER_API_URL, {
      params: {
        lat,
        lon,
        appid: OPEN_WEATHER_KEY,
        units: 'metric',
      },
    });

    return response.data;
  } catch (error) {
    console.log('fetchWeatherData', error);
    throw new Error('Something went wrong');
  }
};

export const getWeatherData = async (city: string) => {
  try {
    const geoData = await fetchGeoData(city);
    const {lat, lon} = geoData;

    const weatherData = await fetchWeatherData(lat, lon);
    return weatherData;
  } catch (error) {
    console.log('getWeatherData', error);
    throw new Error('Please enter valid city');
  }
};
