import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

type MapScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MapScreen'>;

const MapScreen = () => {
  const navigation = useNavigation<MapScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState(2);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const bottomTabs = [
    { icon: 'home-variant', label: 'Home' },
    { icon: 'calendar-month-outline', label: 'Bookings' },
    { icon: 'map-marker-radius', label: 'Map' },
    { icon: 'chat-outline', label: 'Chat' },
    { icon: 'account-outline', label: 'Profile' },
  ];

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    switch (index) {
      case 0:
        navigation.navigate('Home');
        break;
      case 1:
        navigation.navigate('BookingsScreen');
        break;
      case 2:
        break;
      case 3:
        navigation.navigate('ChatScreen');
        break;
      case 4:
        navigation.navigate('ProfileScreen');
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      <LinearGradient
        colors={['#48C6EF', '#6C63FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={handleBackPress}
            style={styles.backBtn}
          >
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nearby Services</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Icon name="filter-variant" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.mapContainer}>
        {/* Placeholder for Map View */}
        <View style={styles.mapPlaceholder}>
          <Icon name="map-marker-radius" size={64} color="#6C63FF" />
          <Text style={styles.mapPlaceholderText}>Map View Coming Soon</Text>
          <Text style={styles.mapPlaceholderSubtext}>Explore nearby service providers</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 8 : StatusBar.currentHeight,
    paddingBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
  },
  backBtn: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerTitle: {
    fontSize: width * 0.06,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginLeft: -width * 0.1,
    letterSpacing: 0.5,
  },
  filterBtn: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8FF',
  },
  mapPlaceholderText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6C63FF',
    marginTop: 16,
  },
  mapPlaceholderSubtext: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});

export default MapScreen; 