import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

type ServiceItem = { label: string; icon: string; color: string };

const allServices: ServiceItem[] = [
  { label: 'Cleaning', icon: 'broom', color: '#6C63FF' },
  { label: 'Repairing', icon: 'tools', color: '#f6b042' },
  { label: 'Painting', icon: 'format-paint', color: '#6ec6ff' },
  { label: 'Laundry', icon: 'tshirt-crew', color: '#ffd700' },
  { label: 'Appliance', icon: 'fridge-outline', color: '#ff6b6b' },
  { label: 'Plumbing', icon: 'water-pump', color: '#38B6FF' },
  { label: 'Shifting', icon: 'truck-fast', color: '#ff8c32' },
  { label: 'Beauty', icon: 'face-woman-shimmer', color: '#a259c6' },
  { label: 'AC Repa.', icon: 'air-conditioner', color: '#38B6FF' },
  { label: 'Vehicle', icon: 'car', color: '#6ec6ff' },
  { label: 'Electronics', icon: 'laptop', color: '#ffd700' },
  { label: 'Massage', icon: 'spa', color: '#ff6b6b' },
  { label: `Men's Sal..`, icon: 'face-man', color: '#a259c6' },
];

const NUM_COLUMNS = 4;

const MoreScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon name="arrow-left" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Services</Text>
        <View style={{ width: 32 }} />
      </View>
      <FlatList<ServiceItem>
        data={allServices}
        keyExtractor={item => item.label}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <View style={[styles.iconBg, { backgroundColor: item.color }]}>
              <Icon name={item.icon} size={36} color="#fff" />
            </View>
            <Text style={styles.label} numberOfLines={1}>{item.label}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  backBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  headerTitle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
    textAlign: 'center',
    marginLeft: 32,
  },
  grid: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 24,
  },
  gridItem: {
    width: '23%',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: '1%',
  },
  iconBg: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: '#222',
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: 60,
  },
});

export default MoreScreen; 