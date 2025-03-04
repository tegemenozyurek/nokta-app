import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MainPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>NOKTA</Text>
      <Text style={styles.welcomeText}>Welcome to Nokta!</Text>
      
      {/* Add your main content here */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Your main content goes here</Text>
      </View>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
    letterSpacing: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  content: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  }
});