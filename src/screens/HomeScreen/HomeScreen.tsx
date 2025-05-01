import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  useColorScheme,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeather} from '../../redux/slices/weatherSlice';
import CityInput from '../../components/CityInput/CityInput';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import styles from './HomeScreen.styles';
import {RootState, AppDispatch} from '../../redux/store';

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state.weather);

  const isDarkMode = useColorScheme() === 'dark';
  const cloudStatus =
    weather.clouds != null ? (weather.clouds > 10 ? 'Cloudy' : 'Sunny') : '—';
  console.log('weather error', weather.error);
  useEffect(() => {
    if (weather.error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: weather.error,
      });
    }
  }, [weather.error]);
  const backgroundImage =
    cloudStatus === 'Cloudy'
      ? require('../../assets/cloudy.jpg')
      : require('../../assets/sunny.jpg');
  const handleFetchWeather = () => {
    if (city.length >= 3) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.innerContainer}>
          <CityInput
            city={city}
            setCity={setCity}
            onSubmit={handleFetchWeather}
          />
          {weather.loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <WeatherCard weatherDetails={weather} />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
