import axios from 'axios';
import {OPEN_WEATHER_KEY} from '@env';
import {GEO_API_URL, WEATHER_API_URL} from '../utils/urls';

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 10000,
});

// Geocoding API call to get lat/lon based on city name
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
      throw new Error('City not found');
    }

    return response.data[0]; // Return the first result
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    throw error; // Propagate the error
  }
};

// Weather API call to get weather data based on lat/lon
export const fetchWeatherData = async (lat: number, lon: number) => {
  try {
    const response = await axiosInstance.get(WEATHER_API_URL, {
      params: {
        lat,
        lon,
        appid: OPEN_WEATHER_KEY,
        units: 'metric', // Convert temperature to Celsius
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Propagate the error
  }
};

// Centralized method to get both geocoding and weather data
export const getWeatherData = async (city: string) => {
  try {
    const geoData = await fetchGeoData(city);
    const {lat, lon} = geoData;

    const weatherData = await fetchWeatherData(lat, lon);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
