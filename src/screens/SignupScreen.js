import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!username || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Weak Password',
        'Password must be at least 8 characters long, include one uppercase letter and one digit.'
      );
      return;
    }

    try {
      const res = await fetch('http://10.0.2.2:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert('Success', data.message || 'User registered!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.error || 'Signup failed');
      }
    } catch (error) {
      Alert.alert('Network Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Image
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/5087/5087579.png', // Replace with your preferred image
            }}
            style={styles.image}
          />

          <Text style={styles.title}>Create Account</Text>

          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <Button title="Sign Up" onPress={handleSignup} />

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    marginTop: 12,
    color: "blue",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SignupScreen;
