
import { useEffect, useState } from 'react'
import { getClients } from './services/api'
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import './App.css'

function App() {
  const [clients, setClients] = useState<{ id: number, name: string }[]>([])
  const [activeTab, setActiveTab] = useState<string>('FAQ');
  console.log(clients)

  useEffect(() => {
    getClients().then(setClients);
  }, []);

  return (
    <>
      <TopBar />
      <SideBar activeTab={activeTab} onTabChange={setActiveTab} />
      <div>
        <a href="https://htverboom.com" target="_blank">
          <img src="/HTV_icoontje.png" className="logo" alt="Logo" />
        </a>
        <a href="https://htverboom.com" target="_blank">
          <img src="/HTV_icoontje.png" className="logo" alt="Logo" />
        </a>
      </div>

      <h1>HTV Service Tool</h1>
    </>
  );

  //return (
    //<div style={{ height: '100vh', overflow: 'hidden' }}>
      //<TopBar />
      //<SideBar activeTab={activeTab} onTabChange={setActiveTab} />
      //<div style={{
        //position: 'absolute',
        //left: '200px',
        //top: '60px',
        //right: '0',
        //bottom: '0',
        //overflow: 'auto',
        //backgroundColor: '#1e1e1e'
      //}}>
        //<ContentArea activeTab={activeTab} />
      //</div>
    //</div>
  //);
}

export default App
