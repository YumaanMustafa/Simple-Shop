import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const ContactScreen = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.includes('@') || !form.message.trim()) {
      Alert.alert('Validation Error', 'No empty submissions allowed. Please fill all fields.');
      return;
    }

    console.log('Form Data:', form);
    Alert.alert('Submitted!', JSON.stringify(form));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header title="Contact Us" />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Contact Us</Text>

        <TextInput
          placeholder="Name"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Message"
          value={form.message}
          multiline
          numberOfLines={4}
          onChangeText={(text) => setForm({ ...form, message: text })}
          style={[styles.input, { height: 120 }]}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactScreen;