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
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

type ChatScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChatScreen'>;

const ChatScreen = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState(3); // Set Chat tab as active (index 3)
  const [message, setMessage] = useState('');
  const [activeChatTab, setActiveChatTab] = useState('Chats');

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
        // Already on Chat screen
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

  const renderChatItem = (name: string, message: string, unread: number | null = 0, time: string, imageUrl: string) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.avatar}
      />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{name}</Text>
          <Text style={styles.chatTime}>{time}</Text>
        </View>
        <View style={styles.chatFooter}>
          <Text style={styles.chatMessage} numberOfLines={1}>{message}</Text>
          {unread !== null && unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCallItem = (name: string, statusAndTime: string, imageUrl: string) => (
    <TouchableOpacity style={styles.callItem}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.avatar}
      />
      <View style={styles.callContent}>
        <Text style={styles.callName}>{name}</Text>
        <Text style={styles.callStatusAndTime}>{statusAndTime}</Text>
      </View>
      <Icon name="phone" size={24} color="#6C63FF" />
    </TouchableOpacity>
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
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity style={styles.searchBtn}>
            <Icon name="magnify" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Chat/Calls Tabs */}
      <View style={styles.chatTabsContainer}>
        <TouchableOpacity
          style={[styles.chatTab, activeChatTab === 'Chats' && styles.activeChatTab]}
          onPress={() => setActiveChatTab('Chats')}
        >
          <Text style={[styles.chatTabTitle, activeChatTab === 'Chats' && styles.activeChatTabTitle]}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.chatTab, activeChatTab === 'Calls' && styles.activeChatTab]}
          onPress={() => setActiveChatTab('Calls')}
        >
          <Text style={[styles.chatTabTitle, activeChatTab === 'Calls' && styles.activeChatTabTitle]}>Calls</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.section}>
          {/* Render chat/call items based on activeChatTab */}
          {activeChatTab === 'Chats' && (
            <>
              {renderChatItem('Jenny Wilson', 'I have booked your house ...', 2, '13.29', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Alfonzo Schuessler', 'I just finished it 😂', 3, '10.48', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Benny Spanbauer', 'omg, this is amazing 🔥🔥', null, '09.25', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Marci Senter', 'Wow, this is really epic 😎', 2, 'Yesterday', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Kylee Danford', 'just ideas for next time 😉', null, 'Dec 20, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Merrill Kervin', 'How are you? 👀', null, 'Dec 20, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Pedro Huard', 'perfect! 💯💯💯', null, 'Dec 18, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderChatItem('Edgar Torrey', '...', null, 'Dec 18, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
            </>
          )}
          {activeChatTab === 'Calls' && (
            <>
              {/* Placeholder Call Items */}
              {renderCallItem('Lauralee Quintero', 'Incoming | Dec 19, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Tanner Stafford', 'Outgoing | Dec 17, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Augustina Midgett', 'Missed | Nov 28, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Geoffrey Mott', 'Outgoing | Nov 24, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Roselle Ehrman', 'Incoming | Nov 14, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Thad Eddings', 'Outgoing | Oct 30, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Daryl Nehls', 'Incoming | Oct 29, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
              {renderCallItem('Francene Vandyne', 'Missed | Oct 25, 2024', 'https://static.vecteezy.com/system/resources/previews/026/428/329/non_2x/3d-cleaning-service-man-with-vacuum-cleaner-man-cleaning-blue-carpet-with-vacuum-cleaner-at-home-housekeeping-staff-3d-illustration-png.png')}
            </>
          )}
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
    fontSize: width * 0.06,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    marginLeft: -width * 0.05,
    letterSpacing: 0.5,
  },
  searchBtn: {
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
  chatTabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F8F8FF',
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  chatTab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: 'transparent',
    marginRight: 24,
  },
  activeChatTab: {
    borderColor: '#6C63FF',
  },
  chatTabTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
  },
  activeChatTabTitle: {
    color: '#6C63FF',
  },
  chatItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  chatTime: {
    fontSize: 12,
    color: '#666',
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  callItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callContent: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
  },
  callName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  callStatusAndTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#F0F4FF',
  },
  input: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    color: '#222',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
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
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#6C63FF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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

export default ChatScreen; 