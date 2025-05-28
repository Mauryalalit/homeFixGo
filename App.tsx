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
  { icon: 'chat-outline', label: 'Chat' },
  { icon: 'account-outline', label: 'Profile' },
];

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8FF' }}>
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
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="bell-outline" size={24} color="#6C63FF" />
            {/* Notification badge */}
            <View style={styles.badge} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}><Icon name="cog-outline" size={24} color="#6C63FF" /></TouchableOpacity>
        </View>

        {/* Glassmorphism Search Bar */}
        <View style={styles.searchBarGlass}>
          <Icon name="magnify" size={22} color="#6C63FF" style={{ marginRight: 8 }} />
          <TextInput placeholder="Search" style={{ flex: 1, fontSize: 16, color: '#333' }} placeholderTextColor="#aaa" />
        </View>

        {/* Special Offers */}
        <View style={styles.specialOfferCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.offerPercent}>30%</Text>
            <Text style={styles.offerText}>Today's Special</Text>
            <Text style={styles.offerDesc}>Get discount for every order, only valid for today</Text>
          </View>
          <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/businessman-3d-avatar/512/businessman_with_bow_tie.png' }} style={styles.offerImage} />
        </View>

        {/* Services */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
        </View>
        <View style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <Animated.View key={service.label} style={{ opacity: fadeAnim, width: '25%', alignItems: 'center', marginVertical: 10 }}>
              <View style={[styles.serviceIcon, { backgroundColor: service.color[0], shadowColor: service.color[0] }]}> 
                <Icon name={service.icon} size={28} color="#fff" />
              </View>
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </Animated.View>
          ))}
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
            onPress={() => setActiveTab(idx)}
            activeOpacity={0.7}
          >
            <View style={activeTab === idx ? styles.activeTabCircle : null}>
              <Icon
                name={tab.icon}
                size={28}
                color={activeTab === idx ? '#6C63FF' : '#BDBDBD'}
              />
            </View>
            {/* Optionally show label below icon */}
            {/* <Text style={{ color: activeTab === idx ? '#6C63FF' : '#BDBDBD', fontSize: 12, fontWeight: '600', marginTop: 2 }}>{tab.label}</Text> */}
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
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginHorizontal: 18,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 18,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e0e6f7',
    shadowColor: '#6C63FF',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  specialOfferCard: {
    flexDirection: 'row',
    backgroundColor: '#6C63FF',
    marginHorizontal: 18,
    borderRadius: 24,
    padding: 22,
    alignItems: 'center',
    marginBottom: 22,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
  },
  offerPercent: {
    color: '#FFD93D',
    fontSize: 26,
    fontWeight: 'bold',
  },
  offerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 2,
  },
  offerDesc: {
    color: '#ede7fe',
    fontSize: 14,
    marginTop: 8,
    width: 150,
    fontWeight: '500',
  },
  offerImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginLeft: 14,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 8,
    marginBottom: 6,
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
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 18,
    marginBottom: 10,
  },
  serviceIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#6C63FF',
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  serviceLabel: {
    fontSize: 14,
    color: '#222',
    fontWeight: '700',
    marginTop: 2,
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
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  activeTabCircle: {
    backgroundColor: 'rgba(108,99,255,0.12)',
    borderRadius: 18,
    padding: 8,
  },
});

export default App;
