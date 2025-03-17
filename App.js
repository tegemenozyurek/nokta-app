import { useState } from "react";
import LoginPage from './LoginRegister/LoginPage';
import RegisterPage from './LoginRegister/RegisterPage';
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
