import React from 'react';
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
      }}>Hello World</Text>
    </View>
  );
};
