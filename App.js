import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {
  useEffect(() => {
    // Анимация начинается после монтирования компонента
    shipRef?.bounceInLeft(10000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Image
        ref={(ref) => (shipRef = ref)}
        source={require('./assets/ship.png')}
        style={styles.ship}
        animation="bounceInLeft"
        duration={10000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ship: {
    width: 1000,
    height: 1000,
  },
});

export default App;
