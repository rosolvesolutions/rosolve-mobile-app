import React, { useState } from 'react'
import { router } from 'expo-router'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'

export default function DriverRegistration(): JSX.Element {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const handleRegister = () => {
    // Check if any field is empty
    if (!phone || !email || !city) {
      alert('Please fill out all fields')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      return
    }

    // Navigate to the profile details screen with parameters
    router.push({
      pathname: '/driver-profile-details',
      params: {
        phoneNumber: phone,
        email: email,
        city: city,
      },
    })
  }

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoText}>Logo</Text>
      </View>

      {/* Phone Field */}
      <Text style={styles.label}>Enter your number here</Text>
      <View style={styles.inputRow}>
        <Text style={styles.flag}>🇮🇪 +353</Text>
        <TextInput
          style={styles.input}
          placeholder="0858446755"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Email Field */}
      <Text style={styles.label}>Enter your email here</Text>
      <View style={styles.inputRow}>
        <Image
          source={require('../assets/images/email.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="jane@gmail.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      {/* City Field */}
      <Text style={styles.label}>City</Text>
      <View style={styles.inputRow}>
        <Image
          source={require('../assets/images/pin.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Dublin"
          value={city}
          onChangeText={setCity}
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Register as a Driver</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 12,
    color: '#555',
  },
  label: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 20,
    width: '100%',
  },
  flag: {
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#C73A53',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
