import { useEffect, useState } from 'react'
import { getClients } from './services/api'
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import ContentArea from "./components/ContentArea";
import type { TabType } from "./types/tabs";
import './App.css'

function App() {
  const [clients, setClients] = useState<{ id: number, name: string }[]>([])
  const [activeTab, setActiveTab] = useState<TabType>('Login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  console.log(clients)
  // Clients fooled. This is to fool the backend for now
  useEffect(() => {
    getClients().then(setClients);
  }, [])

  // auto-switch tab on login/logout
  useEffect(() => {
    if (isLoggedIn && (activeTab === 'Login' || activeTab === 'Register')) {
      // go to default logged-in page
      setActiveTab('FAQ')
    } else if (!isLoggedIn && activeTab === 'Logout') {
      // go to default logged-out page
      setActiveTab('Login')
    }
  }, [isLoggedIn])

  // Actual content. Dynamically obviously
  return (
    <>
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
    </>
  )
}

export default App
