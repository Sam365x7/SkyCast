import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard/WeatherCard';

describe('WeatherCard', () => {
  it('renders weather details correctly', () => {
    const mockWeatherDetails = {
      name: 'London',
      temp: 15,
      clouds: 80,
      feelsLike: 10,
    };

    const {getByText, getByTestId} = render(
      <WeatherCard weatherDetails={mockWeatherDetails} />,
    );

    expect(getByText('London')).toBeTruthy();

    expect(getByText('15°C')).toBeTruthy();

    expect(getByText('Cloudy')).toBeTruthy();

    expect(getByText('Feels like 10°C')).toBeTruthy();
  });

  it('renders Sunny status for low cloud coverage', () => {
    const mockWeatherDetails = {
      name: 'Delhi',
      temp: 30,
      clouds: 5,
      feelsLike: 28,
    };

    const {getByText, getByTestId} = render(
      <WeatherCard weatherDetails={mockWeatherDetails} />,
    );

    expect(getByText('Delhi')).toBeTruthy();

    expect(getByText('30°C')).toBeTruthy();

    expect(getByText('Sunny')).toBeTruthy();

    expect(getByText('Feels like 28°C')).toBeTruthy();
  });
});
