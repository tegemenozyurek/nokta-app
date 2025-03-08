import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Animated, 
  Dimensions 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef } from 'react';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const MENU_WIDTH = WINDOW_WIDTH * 0.7;

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;

  const toggleMenu = () => {
    const toValue = isMenuOpen ? -MENU_WIDTH : 0;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Add overlay when menu is open */}
      {isMenuOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleMenu}
        />
      )}

      {/* Sliding Menu */}
      <Animated.View style={[
        styles.menuContainer,
        {
          transform: [{ translateX: slideAnim }],
        }
      ]}>
        <View style={styles.menuContent}>
          <View style={styles.userSection}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle-outline" size={60} color="#1A1A1A" />
            </View>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john.doe@example.com</Text>
          </View>
          
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="home-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="calendar-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Calendar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="earth-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Browse</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="chatbubble-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Messages</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="person-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            
            <View style={styles.menuDivider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="settings-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="help-circle-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Help</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="log-out-outline" size={24} color="#333" />
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* Main Content */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>NOKTA</Text>
        <Text style={styles.welcomeText}>Welcome to Nokta!</Text>
        
        <View style={styles.content}>
          <Text style={styles.contentText}>Your main content goes here</Text>
        </View>
        
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logo: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
    letterSpacing: 3,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 32,
    color: '#666666',
  },
  content: {
    width: '100%',
    padding: 24,
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  contentText: {
    fontSize: 16,
    color: '#4A4A4A',
    lineHeight: 24,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    marginTop: 6,
    color: '#333333',
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  menuContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: MENU_WIDTH,
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },
  menuHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  menuItems: {
    paddingHorizontal: WINDOW_WIDTH * 0.04,
    paddingTop: WINDOW_HEIGHT * 0.02,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WINDOW_HEIGHT * 0.018,
    paddingHorizontal: WINDOW_WIDTH * 0.04,
    borderRadius: 12,
    marginBottom: WINDOW_HEIGHT * 0.008,
  },
  menuItemText: {
    marginLeft: WINDOW_WIDTH * 0.04,
    fontSize: Math.min(WINDOW_WIDTH * 0.042, 16),
    color: '#333333',
    fontWeight: '500',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: WINDOW_HEIGHT * 0.02,
    marginHorizontal: WINDOW_WIDTH * 0.04,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  },
  menuContent: {
    flex: 1,
    paddingTop: WINDOW_HEIGHT * 0.05, // Responsive padding
  },
  userSection: {
    alignItems: 'center',
    paddingVertical: WINDOW_HEIGHT * 0.03,
    paddingHorizontal: WINDOW_WIDTH * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    marginBottom: WINDOW_HEIGHT * 0.02,
  },
  avatarContainer: {
    width: WINDOW_WIDTH * 0.2,
    height: WINDOW_WIDTH * 0.2,
    borderRadius: (WINDOW_WIDTH * 0.2) / 2,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: WINDOW_HEIGHT * 0.02,
  },
  userName: {
    fontSize: Math.min(WINDOW_WIDTH * 0.055, 22),
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: WINDOW_HEIGHT * 0.005,
  },
  userEmail: {
    fontSize: Math.min(WINDOW_WIDTH * 0.035, 14),
    color: '#666666',
    marginBottom: WINDOW_HEIGHT * 0.01,
  },
});