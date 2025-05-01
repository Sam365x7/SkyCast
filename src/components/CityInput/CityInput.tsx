import React from 'react';
import {TextInput, Button, View} from 'react-native';
import styles from './CityInput.styles';
import {CityInputProps} from './types';

const CityInput: React.FC<CityInputProps> = ({city, setCity, onSubmit}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a city"
        value={city}
        onChangeText={setCity}
        maxLength={40}
        style={styles.input}
        placeholderTextColor="#999"
      />
      {city.length >= 3 && (
        <View style={styles.buttonContainer}>
          <Button title="Fetch Weather" color="#68bbe3" onPress={onSubmit} />
        </View>
      )}
    </View>
  );
};

export default CityInput;
