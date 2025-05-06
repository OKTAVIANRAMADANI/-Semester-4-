import React from 'react';
import {View, Text, StyleSheet, Image, Linking, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import profilImage from '../assets/profil.jpg'; // Gambar lokal

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']} // Gradasi gelap
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={profilImage}
          style={styles.avatar}
        />
        <Text style={styles.name}>Oktavian Ramadani</Text>
        <Text style={styles.title}>Frontend Developer</Text>
        <Text style={styles.bio}>
          Halo! Saya pengembang web dan mobile yang fokus pada React, React Native, dan UI/UX Design.
        </Text>

        <View style={styles.buttonWrapper}>
          <Button title="Tentang Saya" onPress={() => navigation.navigate('About')} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/username')}>
            <Text style={styles.link}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/username')}>
            <Text style={styles.link}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Oktavian Ramadani</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 18,
    color: '#f0f0f0',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#f5f5f5',
  },
  buttonWrapper: {
    marginVertical: 20,
    width: '40%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  link: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#ffffffcc',
  },
});
