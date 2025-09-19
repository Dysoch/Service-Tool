import { useEffect, useState } from 'react';
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import ContentArea from "./components/ContentArea";
import type { TabType } from "./types/tabs";
import { supabase } from "./supabaseClient";
import { LanguageProvider } from "./context/LanguageContext";
import './App.css';

function App() {
  const [user, setUser] = useState<any>(null); // Supabase user object
  const [activeTab, setActiveTab] = useState<TabType>('Login');

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      if (data.session) setActiveTab('Manuals'); // default tab for logged-in users
    });

    // Listen for login/logout events
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setActiveTab(session ? 'Manuals' : 'Login');
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <LanguageProvider userId={user.id}>
          <TopBar
            isLoggedIn={!!user}
          />
          <div className="app-container">
            <SideBar
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isLoggedIn={!!user}
            />
            <div className="content-area">
              <ContentArea
                activeTab={activeTab}
                user={user}
                setUser={setUser}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </LanguageProvider>
      ) : (
        <>
          <TopBar
            isLoggedIn={false}
          />
          <ContentArea
            activeTab={activeTab}
            user={null}
            setUser={setUser}
            setActiveTab={setActiveTab}
          />
          <SideBar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            isLoggedIn={false}
          />
        </>
      )}
    </>
  );
}

export default App;
