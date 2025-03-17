import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Weekly Stand-up',
      time: 'Today, 2:00 PM',
      participants: 8,
    },
    {
      id: 2,
      title: 'Product Review',
      time: 'Tomorrow, 10:00 AM',
      participants: 5,
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Sarah Wilson',
      avatar: 'https://placekitten.com/102/102',
      action: 'commented on your post',
      time: '5m ago'
    },
    {
      id: 2,
      user: 'Alex Thompson',
      avatar: 'https://placekitten.com/103/103',
      action: 'shared a document',
      time: '1h ago'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>
      <Text style={styles.subtitle}>This is your dashboard</Text>

      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      {upcomingEvents.map(event => (
        <View key={event.id} style={styles.card}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventTime}>{event.time}</Text>
          <View style={styles.participants}>
            <Ionicons name="people" size={16} color="#666666" />
            <Text style={styles.participantCount}>{event.participants} participants</Text>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      {recentActivity.map(activity => (
        <View key={activity.id} style={[styles.card, styles.activityItem]}>
          <Image 
            source={{ uri: activity.avatar }} 
            style={styles.avatar}
          />
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>
              <Text style={styles.userName}>{activity.user}</Text> {activity.action}
            </Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 16,
    color: '#1A1A1A',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  participants: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantCount: {
    marginLeft: 4,
    color: '#666666',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityContent: {
    flex: 1,
    marginLeft: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontWeight: '500',
  },
  activityText: {
    fontSize: 14,
    color: '#1A1A1A',
  },
  activityTime: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
});