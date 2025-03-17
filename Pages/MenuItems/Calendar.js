import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Calendar() {
  const events = [
    {
      id: 1,
      title: 'Team Meeting',
      time: '10:00 AM',
      location: 'Conference Room A',
      type: 'work',
    },
    {
      id: 2,
      title: 'Lunch with Client',
      time: '12:30 PM',
      location: 'Downtown Cafe',
      type: 'meeting',
    },
    {
      id: 3,
      title: 'Project Deadline',
      time: '5:00 PM',
      location: 'Office',
      type: 'deadline',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      
      <View style={styles.dateSelector}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.currentDate}>March 18, 2024</Text>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {events.map((event) => (
          <TouchableOpacity key={event.id} style={styles.eventCard}>
            <View style={[styles.eventIndicator, styles[event.type]]} />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDetails}>{event.time}</Text>
              <Text style={styles.eventDetails}>{event.location}</Text>
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
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  currentDate: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  scrollView: {
    flex: 1,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  eventIndicator: {
    width: 4,
    borderRadius: 2,
    marginRight: 12,
  },
  work: {
    backgroundColor: '#4CAF50',
  },
  meeting: {
    backgroundColor: '#2196F3',
  },
  deadline: {
    backgroundColor: '#F44336',
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  eventDetails: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
});