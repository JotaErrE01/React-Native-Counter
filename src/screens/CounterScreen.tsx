import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.title}
      >Counter: {contador}</Text>


      <Fab
        title="+1"
        onPress={() => setContador(contador + 1)}
      />

      <Fab
        title="-1"
        onPress={() => setContador(contador - 1)}
        position="left"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 50,
    left: 30,
  },
});
