import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Help() {
  const helpTopics = [
    {
      title: 'Getting Started',
      icon: 'rocket-outline',
      description: 'Learn the basics of using the app'
    },
    {
      title: 'Account Settings',
      icon: 'person-circle-outline',
      description: 'Manage your account and privacy'
    },
    {
      title: 'FAQ',
      icon: 'help-circle-outline',
      description: 'Frequently asked questions'
    },
    {
      title: 'Contact Support',
      icon: 'mail-outline',
      description: 'Get in touch with our support team'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help Center</Text>
      <ScrollView style={styles.scrollView}>
        {helpTopics.map((topic, index) => (
          <TouchableOpacity key={index} style={styles.topicCard}>
            <Ionicons name={topic.icon} size={24} color="#1A1A1A" />
            <View style={styles.topicContent}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDescription}>{topic.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666666" />
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
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    marginBottom: 12,
  },
  topicContent: {
    flex: 1,
    marginLeft: 16,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 14,
    color: '#666666',
  },
});