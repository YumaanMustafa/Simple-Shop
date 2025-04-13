// App.js
import React, { useState } from 'react';
import { SafeAreaView, View, Button, StyleSheet, Text } from 'react-native';
//importing three screens
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ContactScreen from './src/screens/ContactScreen';

const App = () => {
  const [screen, setScreen] = useState('home');

  const renderScreen = () => {
    switch (screen) {
      case 'products':
        return <ProductsScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>

      {/* Move Buttons to the Bottom */}
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => setScreen('home')} />
        <Button title="Products" onPress={() => setScreen('products')} />
        <Button title="Contact" onPress={() => setScreen('contact')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ensures buttons stay at the bottom
  },
  screenContainer: {
    flex: 1, // Takes up the available space
    justifyContent: 'center', // Centers the screen content
    alignItems: 'center', // Centers the screen content horizontally
  },
  buttonContainer: {
    paddingBottom: 20, // Adds space between buttons and the bottom of the screen
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0', // Optional background color for buttons
  },
});

export default App;
