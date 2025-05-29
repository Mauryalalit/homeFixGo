import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

type ServiceScreenName =
  | 'CleaningScreen'
  | 'RepairingScreen'
  | 'PaintingScreen'
  | 'LaundryScreen'
  | 'ApplianceScreen'
  | 'PlumbingScreen'
  | 'ShiftingScreen'
  | 'MoreScreen'
  | 'SettingsScreen';

const user = {
  name: 'Prince Prajapati',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const services = [
  { label: 'Cleaning', icon: 'broom', color: ['#6C63FF', '#48C6EF'] },
  { label: 'Repairing', icon: 'tools', color: ['#00C9A7', '#92FE9D'] },
  { label: 'Painting', icon: 'format-paint', color: ['#FFB200', '#FF6B6B'] },
  { label: 'Laundry', icon: 'tshirt-crew', color: ['#FFD93D', '#FFB200'] },
  { label: 'Appliance', icon: 'fridge-outline', color: ['#FF6B6B', '#FFB6B9'] },
  { label: 'Plumbing', icon: 'water-pump', color: ['#38B6FF', '#6C63FF'] },
  { label: 'Shifting', icon: 'truck-fast', color: ['#FF8C32', '#FFB200'] },
  { label: 'More', icon: 'dots-horizontal', color: ['#BDBDBD', '#E0E0E0'] },
];

const popularServices = [
  {
    id: '1',
    title: 'House Cleaning',
    price: '$25',
    rating: 4.8,
    reviews: 1200,
    image: 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png',
    user: 'Kyle Daniel',
  },
  {
    id: '2',
    title: 'Floor Cleaning',
    price: '$20',
    rating: 4.6,
    reviews: 980,
    image: 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png',
    user: 'African Schneider',
  },
  {
    id: '3',
    title: 'Washing Clothes',
    price: '$22',
    rating: 4.7,
    reviews: 1700,
    image: 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png',
    user: 'Sujatha Gokhale',
  },
  {
    id: '4',
    title: 'Bathroom Cleaning',
    price: '$24',
    rating: 4.9,
    reviews: 2100,
    image: 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png',
    user: 'Preetha Verma',
  },
];

const filters = ['All', 'Cleaning', 'Repairing', 'Painting'];

const bottomTabs = [
  { icon: 'home-variant', label: 'Home' },
  { icon: 'calendar-month-outline', label: 'Bookings' },
  { icon: 'map-marker-radius', label: 'Map' },
  { icon: 'chat-outline', label: 'Chat' },
  { icon: 'account-outline', label: 'Profile' },
];

const serviceScreens: Record<string, ServiceScreenName> = {
  Cleaning: 'CleaningScreen',
  Repairing: 'RepairingScreen',
  Painting: 'PaintingScreen',
  Laundry: 'LaundryScreen',
  Appliance: 'ApplianceScreen',
  Plumbing: 'PlumbingScreen',
  Shifting: 'ShiftingScreen',
  More: 'MoreScreen',
  Settings: 'SettingsScreen',
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen');
  };

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    switch (index) {
      case 0: // Home tab
        // Already on Home screen
        break;
      case 1: // Bookings tab
        navigation.navigate('BookingsScreen');
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8FF' }}>
      {/* Subtle background gradient */}
      <LinearGradient
        colors={['#f8f8ff', '#e9e6ff']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      {/* Soft background gradient block */}
      <View style={styles.bgGradientBlock} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.greeting}>Good Morning 🌞</Text>
            <Text style={styles.username}>{user.name}</Text>
          </View>
          <TouchableOpacity style={styles.headerIcon} activeOpacity={0.7}>
            <Icon name="bell-outline" size={24} color="#6C63FF" />
            <View style={styles.badge} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerIcon} 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('MapScreen')}
          >
            <Icon name="map-marker-radius" size={24} color="#6C63FF" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.headerIcon} 
            activeOpacity={0.7}
            onPress={handleSettingsPress}
          >
            <Icon name="cog-outline" size={24} color="#6C63FF" />
          </TouchableOpacity>
        </View>
        {/* Glassmorphism Search Bar */}
        <View style={styles.searchBarGlass}>
          <Icon name="magnify" size={24} color="#6C63FF" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Search"
            style={{
              flex: 1,
              fontSize: 17,
              color: '#333',
              fontWeight: '500',
              backgroundColor: 'transparent',
              borderWidth: 0,
              paddingVertical: 0,
            }}
            placeholderTextColor="#b0b0c3"
            underlineColorAndroid="transparent"
          />
        </View>
        {/* Special Offers */}
        <LinearGradient colors={["#6C63FF", "#48C6EF"]} style={styles.specialOfferCard} start={{x:0, y:0}} end={{x:1, y:1}}>
          <View style={{ flex: 1 }}>
            <Text style={styles.offerPercent}>30%</Text>
            <Text style={styles.offerText}>Today's Special</Text>
            <Text style={styles.offerDesc}>Get discount for every order, only valid for today</Text>
          </View>
          <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/businessman-3d-avatar/512/businessman_with_bow_tie.png' }} style={styles.offerImage} />
        </LinearGradient>
        {/* Services */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity activeOpacity={0.7}><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>
        <View style={styles.servicesGrid}>
          {services.map((service, idx) => {
            const screenName = serviceScreens[service.label] as ServiceScreenName;
            return (
              <TouchableOpacity
                key={service.label}
                onPress={() => navigation.navigate(screenName, undefined)}
                style={styles.serviceGridItem}
                activeOpacity={0.85}
              >
                <Animated.View style={{ opacity: fadeAnim, alignItems: 'center', transform: [{ scale: 1 }] }}>
                  <LinearGradient
                    colors={service.color}
                    style={styles.serviceIconEnhanced}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Icon name={service.icon} size={32} color="#fff" />
                  </LinearGradient>
                  <Text style={styles.serviceLabel}>{service.label}</Text>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Most Popular Services */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Most Popular Services</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {filters.map((f, i) => (
            <TouchableOpacity key={f} style={[styles.filterChip, i === 0 && styles.filterChipActive]}>
              <Text style={[styles.filterText, i === 0 && styles.filterTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ marginTop: 10 }}>
          {popularServices.map((service, idx) => (
            <Animated.View key={service.id} style={{ opacity: fadeAnim }}>
              <View style={styles.popularCard}>
                <Image source={{ uri: service.image }} style={styles.popularImage} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.popularTitle}>{service.title}</Text>
                  <Text style={styles.popularUser}>{service.user}</Text>
                  <View style={styles.popularInfoRow}>
                    <Text style={styles.popularPrice}>{service.price}</Text>
                    <Icon name="star" size={16} color="#FFD93D" style={{ marginLeft: 8 }} />
                    <Text style={styles.popularRating}>{service.rating}</Text>
                    <Text style={styles.popularReviews}>| {service.reviews} reviews</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Icon name="bookmark-outline" size={22} color="#6C63FF" />
                </TouchableOpacity>
              </View>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Icon name="plus" size={28} color="#fff" />
      </TouchableOpacity>
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
  bgGradientBlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: '#e9e6ff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: -1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: 'transparent',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
  },
  greeting: {
    fontSize: 14,
    color: '#6C63FF',
    fontWeight: '600',
  },
  username: {
    fontSize: 18,
    color: '#222',
    fontWeight: '800',
  },
  headerIcon: {
    marginLeft: 12,
    padding: 6,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    borderWidth: 1.5,
    borderColor: '#fff',
    zIndex: 2,
  },
  searchBarGlass: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 18,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 22,
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: '#ecebfc',
    shadowColor: '#6C63FF',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  specialOfferCard: {
    flexDirection: 'row',
    marginHorizontal: 18,
    borderRadius: 24,
    padding: 14,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 8,
  },
  offerPercent: {
    marginLeft: 20,
    color: '#FFD93D',
    fontSize: 26,
    fontWeight: 'bold',
  },
  offerText: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 2,
  },
  offerDesc: {
    marginLeft: 20,
    color: '#ede7fe',
    fontSize: 14,
    marginTop: 5,
    width: 150,
    fontWeight: '500',
  },
  offerImage: {
    marginBottom: 0,
    marginTop: 0,
    width: 160,
    height: 140,
    borderRadius: 20,
    marginLeft: 14,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 22,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222',
  },
  seeAll: {
    color: '#6C63FF',
    fontWeight: '700',
    fontSize: 15,
    padding: 6,
    borderRadius: 8,
    overflow: 'hidden',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginBottom: 18,
  },
  serviceGridItem: {
    width: '23%',
    aspectRatio: 1,
    alignItems: 'center',
    marginBottom: 18,
  },
  serviceIconEnhanced: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 8,
  },
  serviceLabel: {
    fontSize: 14,
    color: '#222',
    fontWeight: '700',
    marginTop: 2,
    textAlign: 'center',
    maxWidth: 80,
  },
  filterRow: {
    flexDirection: 'row',
    marginLeft: 18,
    marginBottom: 2,
    marginTop: 2,
  },
  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: '#f0f4ff',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e0e6f7',
  },
  filterChipActive: {
    backgroundColor: '#6C63FF',
    borderColor: '#6C63FF',
  },
  filterText: {
    color: '#888',
    fontWeight: '700',
    fontSize: 15,
  },
  filterTextActive: {
    color: '#fff',
  },
  popularCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.95)',
    marginHorizontal: 18,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
  },
  popularImage: {
    width: 68,
    height: 68,
    borderRadius: 16,
  },
  popularTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#222',
  },
  popularUser: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    fontWeight: '600',
  },
  popularInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#6C63FF',
  },
  popularRating: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    marginLeft: 2,
  },
  popularReviews: {
    fontSize: 14,
    color: '#888',
    marginLeft: 6,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 28,
    bottom: 80,
    backgroundColor: '#6C63FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6C63FF',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
    zIndex: 10,
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
});

export default HomeScreen; 