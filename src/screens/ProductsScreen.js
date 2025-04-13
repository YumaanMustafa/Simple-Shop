import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';  // Assuming you have a Header component
import Footer from '../components/Footer';  // Assuming you have a Footer component

const ProductsScreen = () => {
  const products = [
    {
      name: 'Handsfree',
      description: 'High-quality handsfree for mobile use.',
      image: 'https://www.algo360i.com/wp-content/uploads/2024/06/Handsfree-Price-in-Pakistan-mobile-accessories-in-pakistan-Handsfree-mobile-handsfree.jpg',
    },
    {
      name: 'Airpods',
      description: 'Wireless Airpods with crystal clear sound.',
      image: 'https://www.ilounge.com/wp-content/uploads/2024/03/AirPods.png',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header title="Our Products" />

      {/* Scrollable Content Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>🛍️ Products</Text>

        {products.map((product, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer Section */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProductsScreen;
