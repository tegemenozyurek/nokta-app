import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Browse() {
  const categories = [
    { id: 1, name: 'Popular', icon: 'star-outline' },
    { id: 2, name: 'Trending', icon: 'trending-up-outline' },
    { id: 3, name: 'New', icon: 'time-outline' },
    { id: 4, name: 'Categories', icon: 'grid-outline' },
  ];

  const featuredItems = [
    {
      id: 1,
      title: 'Featured Event 1',
      image: 'https://picsum.photos/300/200',
      date: 'Tomorrow, 7 PM',
    },
    {
      id: 2,
      title: 'Featured Event 2',
      image: 'https://picsum.photos/300/201',
      date: 'Next Week',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Browse</Text>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryItem}>
              <Ionicons name={category.icon} size={24} color="#1A1A1A" />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Featured</Text>
        {featuredItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.featuredItem}>
            <Image source={{ uri: item.image }} style={styles.featuredImage} />
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>{item.title}</Text>
              <Text style={styles.featuredDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 24,
  },
  scrollView: {
    flex: 1,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {
    marginRight: 0,
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  featuredItem: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  featuredDate: {
    fontSize: 14,
    color: '#666666',
  },
});