import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

type BookingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BookingsScreen'>;

const BookingsScreen = () => {
  const navigation = useNavigation<BookingsScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState(1); // Set Bookings tab as active (index 1)
  const [activeBookingTab, setActiveBookingTab] = useState('Cancelled');

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    switch (index) {
      case 0: // Home tab
        navigation.navigate('Home');
        break;
      case 1: // Bookings tab
        // Already on Bookings screen
        break;
      case 2: // Map tab
        navigation.navigate('MapScreen');
        break;
      case 3: // Chat tab
        navigation.navigate('ChatScreen');
        break;
      case 4: // Profile tab
        navigation.navigate('ProfileScreen');
        break;
    }
  };

  const bottomTabs = [
    { icon: 'home-variant', label: 'Home' },
    { icon: 'calendar-month-outline', label: 'Bookings' },
    { icon: 'map-marker-radius', label: 'Map' },
    { icon: 'chat-outline', label: 'Chat' },
    { icon: 'account-outline', label: 'Profile' },
  ];

  const renderBookingItem = (service: string, date: string, status: string, price: string, imageUrl: string, providerName: string) => (
    <View style={styles.bookingItem}>
      <View style={styles.bookingItemContent}>
        <Image source={{ uri: imageUrl }} style={styles.bookingImage} />
        <View style={styles.bookingDetailsContent}>
          <Text style={styles.serviceText}>{service}</Text>
          <Text style={styles.providerText}>{providerName}</Text>
          <View style={[styles.statusContainer, { backgroundColor: status === 'Completed' ? '#E8F5E9' : (status === 'Cancelled' ? '#FFEBEE' : '#FFF3E0') }]}>
            <Text style={[styles.statusText, { color: status === 'Completed' ? '#4CAF50' : (status === 'Cancelled' ? '#F44336' : '#FF9800') }]}>{status}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.chatIconContainer}>
          <Icon name="chat-processing-outline" size={24} color="#6C63FF" />
        </TouchableOpacity>
      </View>
      <View style={styles.bookingFooterExpanded}>
        <View style={styles.detailRow}>
          <Icon name="calendar" size={18} color="#666" />
          <Text style={styles.detailText}>{date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="clock-outline" size={18} color="#666" />
          <Text style={styles.detailText}>2:00 PM - 4:00 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="map-marker" size={18} color="#666" />
          <Text style={styles.detailText}>123 Home Street, City</Text>
        </View>
        {status !== 'Cancelled' && (
          <TouchableOpacity style={styles.rescheduleBtn}>
            <Text style={styles.rescheduleText}>Reschedule</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.expandIconContainer}>
        <Icon name="chevron-down" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );

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
          <Text style={styles.headerTitle}>My Bookings</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Icon name="filter-variant" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Booking Status Tabs */}
      <View style={styles.bookingTabsContainer}>
        <TouchableOpacity 
          style={[styles.bookingTab, activeBookingTab === 'Upcoming' && styles.activeBookingTab]}
          onPress={() => setActiveBookingTab('Upcoming')}
        >
          <Text style={[styles.bookingTabTitle, activeBookingTab === 'Upcoming' && styles.activeBookingTabTitle]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bookingTab, activeBookingTab === 'Completed' && styles.activeBookingTab]}
          onPress={() => setActiveBookingTab('Completed')}
        >
          <Text style={[styles.bookingTabTitle, activeBookingTab === 'Completed' && styles.activeBookingTabTitle]}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bookingTab, activeBookingTab === 'Cancelled' && styles.activeBookingTab]}
          onPress={() => setActiveBookingTab('Cancelled')}
        >
          <Text style={[styles.bookingTabTitle, activeBookingTab === 'Cancelled' && styles.activeBookingTabTitle]}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.section}>
          {/* Render booking items based on activeBookingTab */}
          {activeBookingTab === 'Upcoming' && (
            <>
              {renderBookingItem('House Cleaning', 'Jan 25, 2024', 'Scheduled', '$45', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'John Doe')}
              {renderBookingItem('Appliance Repair', 'Jan 28, 2024', 'Scheduled', '$75', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'Jane Smith')}
            </>
          )}
          {activeBookingTab === 'Completed' && (
            <>
              {renderBookingItem('House Cleaning', 'Jan 15, 2024', 'Completed', '$45', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'John Doe')}
              {renderBookingItem('Appliance Repair', 'Jan 10, 2024', 'Completed', '$75', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'Jane Smith')}
            </>
          )}
          {activeBookingTab === 'Cancelled' && (
            <>
              {renderBookingItem('Plumbing Repair', 'Jan 20, 2024', 'Cancelled', '$50', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'Chantal Shelburne')}
              {renderBookingItem('Appliance Service', 'Jan 18, 2024', 'Cancelled', '$80', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'Benny Spanbauer')}
              {renderBookingItem('Laundry Services', 'Jan 16, 2024', 'Cancelled', '$30', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png', 'Phyllis Godley')}
            </>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {bottomTabs.map((tab, idx) => (
          <TouchableOpacity
            key={tab.icon}
            style={styles.navItem}
            onPress={() => handleTabPress(idx)}
            activeOpacity={0.7}
          >
            <View style={activeTab === idx ? styles.activeTabCircle : null}>
              <Icon
                name={tab.icon}
                size={28}
                color={activeTab === idx ? '#6C63FF' : '#BDBDBD'}
              />
            </View>
          </TouchableOpacity>
        ))}
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
    paddingBottom: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    backgroundColor: '#F8F8FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
    height: 60,
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
    fontSize: width * 0.055,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginLeft: 0,
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
  content: {
    flex: 1,
  },
  section: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6C63FF',
    marginBottom: 16,
    marginLeft: 8,
  },
  bookingItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F0F4FF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  bookingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bookingImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  bookingDetailsContent: {
    flex: 1,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  providerText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  statusContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  bookingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F4FF',
    paddingTop: 12,
  },
  bookingFooterExpanded: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F4FF',
    marginTop: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6C63FF',
  },
  rescheduleBtn: {
    backgroundColor: '#F0F4FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  rescheduleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6C63FF',
  },
  chatIconContainer: {
    padding: 8,
    backgroundColor: '#F0F4FF',
    borderRadius: 20,
    marginLeft: 8,
  },
  expandIconContainer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 68,
    borderTopWidth: 1.5,
    borderColor: '#e0e6f7',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 12,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  activeTabCircle: {
    backgroundColor: 'rgba(108,99,255,0.20)',
    borderRadius: 18,
    padding: 10,
  },
  bookingTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    backgroundColor: '#F8F8FF',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  bookingTab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeBookingTab: {
    borderColor: '#6C63FF',
  },
  bookingTabTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
  },
  activeBookingTabTitle: {
    color: '#6C63FF',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconBtn: {
    marginLeft: 16,
    padding: 4,
  },
});

export default BookingsScreen; 