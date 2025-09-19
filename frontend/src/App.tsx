import { useEffect, useState } from 'react'
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import ContentArea from "./components/ContentArea";
import type { TabType } from "./types/tabs";
import { supabase } from "./supabaseClient";
import { LanguageProvider } from "./context/LanguageContext"
import './App.css'

function App() {
  const [user, setUser] = useState<any>(null); // supabase user object
  const [activeTab, setActiveTab] = useState<TabType>('Login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user);
        setIsLoggedIn(true);
      }
    });

    // Listen for login/logout
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoggedIn(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Actual content. Dynamically obviously
  return (
    <>
      {user ? (
        <LanguageProvider userId={user?.id ?? ""}>
          <TopBar />
          <div className="app-container">
            <SideBar
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isLoggedIn={isLoggedIn}
            />
            <div className="content-area">
              <ContentArea activeTab={activeTab} setIsLoggedIn={setIsLoggedIn} />
            </div>
          </div>
        </LanguageProvider>
      ) : (
        // Not logged in → just render login/register
        <ContentArea activeTab={activeTab} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App
