import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Messages() {
  const messages = [
    {
      id: '1',
      user: 'Jane Smith',
      avatar: 'https://placekitten.com/100/100',
      message: 'Hey, how are you doing?',
      time: '5m ago',
      unread: true,
    },
    {
      id: '2',
      user: 'Mike Johnson',
      avatar: 'https://placekitten.com/101/101',
      message: 'The meeting is scheduled for tomorrow',
      time: '2h ago',
      unread: false,
    },
    // Add more message items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.userName}>{item.user}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <Text 
          style={[styles.messageText, item.unread && styles.unreadText]}
          numberOfLines={1}
        >
          {item.message}
        </Text>
      </View>
      {item.unread && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
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
  list: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  messageTime: {
    fontSize: 14,
    color: '#666666',
  },
  messageText: {
    fontSize: 14,
    color: '#666666',
  },
  unreadText: {
    color: '#1A1A1A',
    fontWeight: '500',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1A1A1A',
    marginLeft: 8,
  },
});