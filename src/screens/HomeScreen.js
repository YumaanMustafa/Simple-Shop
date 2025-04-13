import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import Header from '../components/Header'; // Custom reusable Header component
import Footer from '../components/Footer'; // Custom reusable Footer component

const HomeScreen = () => {
  // Handles "Say Hello" button press
  const handlePress = () => {
    console.log('Home Button Pressed');
    Alert.alert('Hello!', 'Welcome to Our SimpleShop');
  };

  // Handles Contact button press
  const handleContactPress = () => {
    Alert.alert('Contact Us', 'You can reach us at contact@simpleshop.com');
  };

  // Handles Products button press
  const handleProductsPress = () => {
    Alert.alert('Products', 'Check out our amazing range of products on the website!');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header title="Home" />

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Screen Title */}
        <Text style={styles.title}>🏠 Home Screen</Text>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>
          Welcome to our SimpleShop! Your one-stop shop for all your needs.
        </Text>

        {/* "Say Hello" Button */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Say Hello</Text>
        </TouchableOpacity>

        {/* Button to trigger contact info alert */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleContactPress}>
            <Text style={styles.buttonText}>Go to Contact</Text>
          </TouchableOpacity>
        </View>

        {/* Button to trigger product info alert */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleProductsPress}>
            <Text style={styles.buttonText}>Browse Products</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Section */}
      <Footer />
    </View>
  );
};

// Styling for the HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes sure the container takes full screen height
    backgroundColor: '#f5f5f5', // Light background color
  },
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView content can grow
    justifyContent: 'flex-start', // Aligns content to the top
    padding: 20, // Uniform padding
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555', // Slightly muted text
  },
  buttonContainer: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#333', // Dark gray background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen; // Export the component so it can be used in other parts of the app
