import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
  title: string;
  position?: 'right' | 'left';
  onPress: () => void;
}

export const Fab: FC<Props> = ({ title, onPress, position = 'right' }) => {
  return (
    <View
      style={[
        styles.fabLocation,
        styles[position],
      ]}
    >
      <TouchableNativeFeedback
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: -2,
  },
  right: {
    right: 30,
  },
  left: {
    left: 30,
  },
  fabLocation: {
    borderRadius: 100,
    bottom: 50,
    overflow: 'hidden',
    position: 'absolute',
  },

});
