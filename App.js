import { useState } from "react";
// Update import paths to include full path from Pages directory
import LoginPage from './Pages/LoginRegister/LoginPage';
import RegisterPage from './Pages/LoginRegister/RegisterPage';
import MainPage from "./MainPage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  //aaaa
  if (!isAuthenticated) {
    if (showRegister) {
      return (
        <RegisterPage
          onRegister={() => setIsAuthenticated(true)}
          switchToLogin={() => setShowRegister(false)}
        />
      );
    }
    return (
      <LoginPage
        onLogin={() => setIsAuthenticated(true)}
        switchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return <MainPage />;
}
