import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
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

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState(4); // Set Profile tab as active (index 4)

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
        navigation.navigate('BookingsScreen');
        break;
      case 2: // Map tab
        navigation.navigate('MapScreen');
        break;
      case 3: // Chat tab
        navigation.navigate('ChatScreen');
        break;
      case 4: // Profile tab
        // Already on Profile screen
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

  const renderProfileItem = (icon: string, label: string, value: string) => (
    <View style={styles.profileItem}>
      <View style={styles.profileItemLeft}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={22} color="#6C63FF" />
        </View>
        <Text style={styles.profileItemLabel}>{label}</Text>
      </View>
      <Text style={styles.profileItemValue}>{value}</Text>
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
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Icon name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Prince Prajapati</Text>
          <Text style={styles.profileRole}>Premium Member</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Bookings</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>4.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$120</Text>
              <Text style={styles.statLabel}>Spent</Text>
            </View>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          {renderProfileItem('email-outline', 'Email', 'prince@example.com')}
          {renderProfileItem('phone-outline', 'Phone', '+1 234 567 8900')}
          {renderProfileItem('map-marker-outline', 'Address', '123 Home Street, City, Country')}
          {renderProfileItem('calendar-outline', 'Member Since', 'January 2024')}
        </View>

        {/* Account Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingItemLeft}>
              <View style={styles.iconContainer}>
                <Icon name="shield-account" size={22} color="#6C63FF" />
              </View>
              <Text style={styles.settingText}>Security</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingItemLeft}>
              <View style={styles.iconContainer}>
                <Icon name="credit-card-outline" size={22} color="#6C63FF" />
              </View>
              <Text style={styles.settingText}>Payment Methods</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingItemLeft}>
              <View style={styles.iconContainer}>
                <Icon name="bell-outline" size={22} color="#6C63FF" />
              </View>
              <Text style={styles.settingText}>Notifications</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: '#E3F2FD' }]}>
              <Icon name="broom" size={20} color="#6C63FF" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>House Cleaning</Text>
              <Text style={styles.activityDate}>Completed on Jan 15, 2024</Text>
            </View>
            <Text style={styles.activityAmount}>$25</Text>
          </View>
          <View style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: '#E8F5E9' }]}>
              <Icon name="tools" size={20} color="#4CAF50" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Appliance Repair</Text>
              <Text style={styles.activityDate}>Completed on Jan 10, 2024</Text>
            </View>
            <Text style={styles.activityAmount}>$45</Text>
          </View>
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
  editBtn: {
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 20,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#6C63FF',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginTop: 16,
  },
  profileRole: {
    fontSize: 16,
    color: '#6C63FF',
    fontWeight: '600',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#F0F4FF',
    width: '100%',
    justifyContent: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#F0F4FF',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6C63FF',
    marginBottom: 16,
    marginLeft: 8,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
  },
  profileItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  profileItemLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  profileItemValue: {
    fontSize: 14,
    color: '#666',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  activityDate: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6C63FF',
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

export default ProfileScreen; 