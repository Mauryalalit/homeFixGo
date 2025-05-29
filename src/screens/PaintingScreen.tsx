import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const PaintingScreen = () => (
  <SafeAreaView style={styles.container}>
    <LinearGradient colors={["#FFB200", "#FF6B6B"]} style={styles.header}>
      <Icon name="format-paint" size={40} color="#fff" />
      <Text style={styles.title}>Painting Services</Text>
    </LinearGradient>
    <View style={styles.content}>
      <Text style={styles.desc}>Professional painting for homes and offices. Book a service now!</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8FF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  desc: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default PaintingScreen; 