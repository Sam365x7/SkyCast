// src/redux/slices/weatherSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getWeatherData} from '../../services/weatherService'; // Import the service function

interface WeatherState {
  name: string | null;
  temp: number | null;
  clouds: number | null;
  loading: boolean;
  error: string | null;
  feelsLike: number | null;
}

const initialState: WeatherState = {
  name: null,
  temp: null,
  clouds: null,
  loading: false,
  error: null,
  feelsLike: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action: PayloadAction<WeatherState>) {
      state.loading = false;
      state.name = action.payload.name;
      state.temp = action.payload.temp;
      state.clouds = action.payload.clouds;
      state.feelsLike = action.payload.feelsLike;
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.name = null;
      state.temp = null;
      state.clouds = null;
      state.feelsLike = null;
    },
  },
});

export const fetchWeather = (city: string) => async (dispatch: any) => {
  dispatch(fetchWeatherStart());

  try {
    const weatherData = await getWeatherData(city);
    console.log('weatherdata', weatherData);
    dispatch(
      fetchWeatherSuccess({
        name: weatherData.name,
        temp: weatherData.main.temp,
        clouds: weatherData.clouds.all,
        loading: false,
        error: null,
        feelsLike: weatherData.main.feels_like,
      }),
    );
  } catch (error) {
    dispatch(fetchWeatherFailure((error as Error).message));
  }
};

export const {fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure} =
  weatherSlice.actions;

export default weatherSlice.reducer;
