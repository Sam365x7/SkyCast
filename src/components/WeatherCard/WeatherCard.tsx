import React from 'react';
import {Text, View} from 'react-native';
import styles from './WeatherInput.styles';
import {WeatherCardProps} from './types';

import WeatherIcon from '../sharedComponents/WeatherIcon/WeatherIcon';

const WeatherCard: React.FC<WeatherCardProps> = ({weatherDetails}) => {
  const cloudStatus =
    weatherDetails.clouds != null
      ? weatherDetails.clouds > 10
        ? 'Cloudy'
        : 'Sunny'
      : '—';

  const iconName = cloudStatus === 'Cloudy' ? 'cloud' : 'sun';
  const locationIconName = 'location-pin';

  return (
    <View style={styles.card}>
      {weatherDetails.name !== null ? (
        <>
          <View style={styles.parentView}>
            <Text style={styles.city}>{weatherDetails.name}</Text>
            <WeatherIcon
              type="Entypo"
              name={locationIconName}
              size={20}
              color="black"
            />
          </View>
          <Text style={styles.temp}>
            {Math.floor(Number(weatherDetails.temp))}°C
          </Text>
          <View style={styles.bundleView}>
            <View style={styles.iconBox}>
              <WeatherIcon
                type="Feather"
                name={iconName}
                size={26}
                color="#fff"
              />
            </View>
            <Text style={styles.status}>{cloudStatus}</Text>
            <Text style={styles.feelLike}>
              Feels like {Math.floor(Number(weatherDetails.feelsLike))}°C
            </Text>
          </View>
        </>
      ) : (
        <Text style={styles.city}>Please enter city to continue </Text>
      )}
    </View>
  );
};

export default WeatherCard;
