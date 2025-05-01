import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeather} from '../src/redux/slices/weatherSlice';

jest.mock('react-redux');
jest.mock('../src/redux/slices/weatherSlice');

describe('HomeScreen', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockReturnValue({
      name: 'London',
      temp: 15,
      clouds: {all: 80},
      loading: false,
    });
    useDispatch.mockReturnValue(mockDispatch);
    fetchWeather.mockClear();
  });

  it('dispatches fetchWeather on valid city input', async () => {
    const {getByPlaceholderText, getByText} = render(<HomeScreen />);

    // Simulate user typing a city name
    const input = getByPlaceholderText('Type city or place...');
    fireEvent.changeText(input, 'Delhi');

    // Simulate button press after input
    const fetchButton = getByText('Fetch Weather');
    fireEvent.press(fetchButton);

    // Check that the fetchWeather action was dispatched with the correct city
    expect(mockDispatch).toHaveBeenCalledWith(fetchWeather('Delhi'));
  });

  it('does not show button for short input', () => {
    const {getByPlaceholderText, queryByText} = render(<HomeScreen />);

    // Simulate user typing a short city name
    const input = getByPlaceholderText('Type city or place...');
    fireEvent.changeText(input, 'NY');

    // Ensure the button is not rendered
    expect(queryByText('Fetch Weather')).toBeNull();
  });

  it('renders weather information correctly', async () => {
    const {getByText} = render(<HomeScreen />);

    // Check that weather data is rendered properly
    expect(getByText('London')).toBeTruthy();
    expect(getByText('15°C')).toBeTruthy();
    expect(getByText('Cloudy')).toBeTruthy();
  });
});
