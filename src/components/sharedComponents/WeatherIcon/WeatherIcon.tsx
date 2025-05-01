import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {WeatherIconProps} from './types';

const WeatherIcon: React.FC<WeatherIconProps> = ({type, name, size, color}) => {
  if (type === 'Feather') {
    return <FeatherIcon name={name} size={size} color={color} />;
  }

  if (type === 'Entypo') {
    return <EntypoIcon name={name} size={size} color={color} />;
  }

  return null;
};

export default WeatherIcon;
