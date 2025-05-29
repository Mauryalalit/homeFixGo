import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions,
  Switch,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationServices, setLocationServices] = useState(true);
  const [biometricAuth, setBiometricAuth] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderSettingItem = (
    icon: string,
    label: string,
    rightElement?: React.ReactNode,
    onPress?: () => void,
    showDivider: boolean = true
  ) => (
    <TouchableOpacity 
      style={[styles.settingItem, !showDivider && styles.settingItemNoBorder]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.settingItemLeft}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={22} color="#6C63FF" />
        </View>
        <Text style={styles.settingText}>{label}</Text>
      </View>
      {rightElement || <Icon name="chevron-right" size={24} color="#BDBDBD" />}
    </TouchableOpacity>
  );

  const renderSwitch = (value: boolean, onValueChange: (value: boolean) => void) => (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#E0E0E0', true: '#6C63FF' }}
      thumbColor={Platform.OS === 'ios' ? '#FFFFFF' : value ? '#FFFFFF' : '#FFFFFF'}
      ios_backgroundColor="#E0E0E0"
    />
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
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: width * 0.1 }} />
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Prince Prajapati</Text>
            <Text style={styles.profileEmail}>prince@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editProfileBtn}>
            <Icon name="pencil" size={18} color="#6C63FF" />
          </TouchableOpacity>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          {renderSettingItem('account-outline', 'Personal Information')}
          {renderSettingItem('shield-account', 'Security', undefined, undefined, false)}
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          {renderSettingItem('translate', 'Language', <Text style={styles.settingValue}>English</Text>)}
          {renderSettingItem('currency-usd', 'Currency', <Text style={styles.settingValue}>USD</Text>)}
          {renderSettingItem('theme-light-dark', 'Dark Mode', renderSwitch(darkMode, setDarkMode), undefined, false)}
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {renderSettingItem('bell-outline', 'Push Notifications', renderSwitch(notifications, setNotifications))}
          {renderSettingItem('email-outline', 'Email Notifications', renderSwitch(notifications, setNotifications))}
          {renderSettingItem('message-outline', 'SMS Notifications', renderSwitch(notifications, setNotifications), undefined, false)}
        </View>

        {/* Privacy & Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>
          {renderSettingItem('fingerprint', 'Biometric Authentication', renderSwitch(biometricAuth, setBiometricAuth))}
          {renderSettingItem('map-marker', 'Location Services', renderSwitch(locationServices, setLocationServices))}
          {renderSettingItem('lock-outline', 'Privacy Settings')}
          {renderSettingItem('shield-lock', 'Two-Factor Authentication', undefined, undefined, false)}
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          {renderSettingItem('help-circle-outline', 'Help Center')}
          {renderSettingItem('message-question', 'FAQ')}
          {renderSettingItem('information-outline', 'About')}
          {renderSettingItem('file-document-outline', 'Terms & Conditions')}
          {renderSettingItem('shield-check', 'Privacy Policy', undefined, undefined, false)}
        </View>

        {/* App Info Section */}
        <View style={styles.appInfoSection}>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Icon name="logout" size={20} color="#FF6B6B" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 20,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#6C63FF',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  editProfileBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
  },
  settingItemNoBorder: {
    borderBottomWidth: 0,
  },
  settingItemLeft: {
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
  settingText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    flex: 1,
  },
  settingValue: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  appInfoSection: {
    alignItems: 'center',
    marginVertical: 24,
    marginBottom: 32,
  },
  appVersion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B6B',
  },
});

export default SettingsScreen; 