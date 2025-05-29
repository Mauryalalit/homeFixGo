import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Image, StatusBar, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  Home: undefined;
  Cleaning: undefined;
  // Add other screens as needed
};

type CleaningScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cleaning'>;

type CleaningService = {
  id: string;
  user: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  bg: string;
};

const cleaningServices = [
  {
    id: '1',
    user: 'Jenny Wilson',
    title: 'House Cleaning',
    price: '$20',
    rating: 4.8,
    reviews: 4479,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bg: '#f9d6f7',
  },
  {
    id: '2',
    user: 'Willard Purnell',
    title: 'Floor Cleaning',
    price: '$23',
    rating: 4.9,
    reviews: 6182,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bg: '#ffe0e0',
  },
  {
    id: '3',
    user: 'Tynisha Obey',
    title: 'Washing Clothes',
    price: '$22',
    rating: 4.7,
    reviews: 7938,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    bg: '#e0eaff',
  },
  {
    id: '4',
    user: 'Georgette Strobel',
    title: 'Bathroom Cleaning',
    price: '$24',
    rating: 4.9,
    reviews: 6182,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bg: '#e0ffe0',
  },
  {
    id: '5',
    user: 'Titus Kitamura',
    title: 'Washing Clothes',
    price: '$22',
    rating: 4.7,
    reviews: 7938,
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    bg: '#e0f7fa',
  },
];

const CleaningScreen = () => {
  const navigation = useNavigation<CleaningScreenNavigationProp>();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      // If can't go back, navigate to Home screen
      navigation.navigate('Home');
    }
  };

  const renderHeader = () => (
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
        <Text style={styles.headerTitle}>Cleaning Services</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <Icon name="magnify" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  const renderCard = ({ item }: { item: CleaningService }) => (
    <TouchableOpacity style={styles.card}>
      <LinearGradient
        colors={[item.bg, '#fff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.avatarBg}
      >
        <Image source={{ uri: item.image }} style={styles.avatar} />
      </LinearGradient>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.user}>{item.user}</Text>
          <TouchableOpacity style={styles.bookmarkBtn}>
            <Icon name="bookmark-outline" size={22} color="#6C63FF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.perHour}>/hour</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD93D" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
          <View style={styles.reviewsContainer}>
            <Icon name="account-group" size={14} color="#636E72" style={styles.reviewIcon} />
            <Text style={styles.reviews}>{item.reviews.toLocaleString()} reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
      {renderHeader()}
      <FlatList
        data={cleaningServices}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={renderCard}
        ListHeaderComponent={<View style={styles.listHeader} />}
        ListFooterComponent={<View style={styles.listFooter} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9ff'
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
  searchBtn: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  list: {
    paddingHorizontal: width * 0.04,
  },
  listHeader: {
    height: 16,
  },
  listFooter: {
    height: 24,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: width * 0.04,
    marginBottom: height * 0.02,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  avatarBg: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: 18,
  },
  cardContent: {
    flex: 1,
    marginLeft: width * 0.04,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  user: {
    fontSize: width * 0.035,
    color: '#636E72',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  price: {
    fontSize: width * 0.05,
    color: '#6C63FF',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  perHour: {
    fontSize: width * 0.035,
    color: '#636E72',
    marginLeft: 4,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 217, 61, 0.1)',
    paddingHorizontal: width * 0.02,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
  },
  rating: {
    fontSize: width * 0.035,
    color: '#2D3436',
    fontWeight: '700',
    marginLeft: 4,
  },
  reviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(99, 110, 114, 0.1)',
    paddingHorizontal: width * 0.02,
    paddingVertical: 4,
    borderRadius: 12,
  },
  reviewIcon: {
    marginRight: 4,
  },
  reviews: {
    fontSize: width * 0.032,
    color: '#636E72',
    fontWeight: '600',
  },
  bookmarkBtn: {
    padding: 6,
  },
});

export default CleaningScreen; 