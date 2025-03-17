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
import Home from './Pages/MenuItems/Home';
import Calendar from './Pages/MenuItems/Calendar';
import Browse from './Pages/MenuItems/Browse';
import Messages from './Pages/MenuItems/Messages';
import Profile from './Pages/MenuItems/Profile';
import Settings from './Pages/MenuItems/Settings';
import Help from './Pages/MenuItems/Help';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const MENU_WIDTH = WINDOW_WIDTH * 0.7;

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
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

  const renderPage = () => {
    switch(activePage) {
      case 'Home':
        return <Home />;
      case 'Calendar':
        return <Calendar />;
      case 'Browse':
        return <Browse />;
      case 'Messages':
        return <Messages />;
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Help':
        return <Help />;
      default:
        return <Home />;
    }
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
            {[
              { name: 'Home', icon: 'home-outline' },
              { name: 'Calendar', icon: 'calendar-outline' },
              { name: 'Browse', icon: 'earth-outline' },
              { name: 'Messages', icon: 'chatbubble-outline' },
              { name: 'Profile', icon: 'person-outline' }
            ].map((item) => (
              <TouchableOpacity 
                key={item.name}
                style={[
                  styles.menuItem,
                  activePage === item.name && styles.menuItemActive
                ]}
                onPress={() => setActivePage(item.name)}
              >
                <Ionicons 
                  name={item.icon} 
                  size={24} 
                  color={activePage === item.name ? '#1A1A1A' : '#333'} 
                />
                <Text style={[
                  styles.menuItemText,
                  activePage === item.name && styles.menuItemTextActive
                ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}

            <View style={styles.menuDivider} />
            
            {[
              { name: 'Settings', icon: 'settings-outline' },
              { name: 'Help', icon: 'help-circle-outline' },
              { name: 'Logout', icon: 'log-out-outline' }
            ].map((item) => (
              <TouchableOpacity 
                key={item.name}
                style={[
                  styles.menuItem,
                  activePage === item.name && styles.menuItemActive
                ]}
                onPress={() => setActivePage(item.name)}
              >
                <Ionicons 
                  name={item.icon} 
                  size={24} 
                  color={activePage === item.name ? '#1A1A1A' : '#333'} 
                />
                <Text style={[
                  styles.menuItemText,
                  activePage === item.name && styles.menuItemTextActive
                ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
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
        {renderPage()}
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
  menuItemActive: {
    backgroundColor: '#E0E0E0',
  },
  menuItemTextActive: {
    color: '#1A1A1A',
  },
});