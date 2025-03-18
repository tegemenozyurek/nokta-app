import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// A separate component for rendering each help topic
function HelpTopic({ title, icon, description, onPress }) {
  return (
    <TouchableOpacity style={styles.topicContainer} onPress={onPress}>
      <Ionicons name={icon} size={24} color="black" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Help() {
  // State to track the selected topic
  const [selectedTopic, setSelectedTopic] = useState(null);

  const helpTopics = [
  
    {
      title: 'Calendar',
      icon: 'calendar-outline',
      description: 'In this section, you can view the status of all your appointments. Along with the date and time details of your appointments, the current status of each one, including any cancellations, will be displayed. The status of past appointments will be marked as confirmed, canceled, or pending. This allows you to easily track all your appointments and make adjustments when needed.'
    },
    {
      title: 'Messages',
      icon: 'chatbubble-outline',
      description: 'In this section, you can directly communicate with service providers. By messaging the places where you want to make appointments, you can ask questions, clarify appointment details, or convey special requests. All your conversations are saved here and easily accessible. This feature makes communication between users and service providers faster and more efficient.'
    },
    {
      title: 'Browse',
      icon: 'search-outline',
      description: 'In this section, you can explore different businesses where you can receive services. By viewing the list of businesses, you can filter them based on categories, locations, and the services they offer. When you click on a business you like, you can access detailed information about it and easily make a reservation. This feature helps you find the businesses that best suit your needs and quickly book an appointment.'
    }
  ];

  // Function to handle the topic click and display the corresponding description
  const handleTopicPress = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <ScrollView style={styles.container}>
      {helpTopics.map((topic, index) => (
        <HelpTopic
          key={index}
          title={topic.title}
          icon={topic.icon}
          description={topic.description}
          onPress={() => handleTopicPress(topic)} // Set the clicked topic's description to show
        />
      ))}

      {/* Display the selected topic's description */}
      {selectedTopic && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{selectedTopic.title}</Text>
          <Text style={styles.description}>{selectedTopic.description}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  topicContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8
  },
  icon: {
    marginRight: 12,
    marginTop: 4
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20 // Ensures better readability for multiline text
  },
  descriptionContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333'
  }
});
