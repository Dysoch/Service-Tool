import type { TabType } from '../types/tabs'
import ManualsTab from '../pages/ManualsTab'
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import { useState } from 'react'

interface ContentAreaProps {
    activeTab: TabType
    setIsLoggedIn: (val: boolean) => void
}

export default function ContentArea({ activeTab, setIsLoggedIn }: ContentAreaProps) {
    const [selectedManual] = useState<string | undefined>(undefined);
    const [_, setActiveTab] = useState<TabType>('Login')

    switch (activeTab) {
        case 'FAQ':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>FAQ</h1>
                    <h2>Coming Soon, Work in Progress</h2>
                </div>
            )

        case 'Contact':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Contact Page</h1>
                    <h2>Coming Soon, Work in Progress</h2>
                </div>
            )

        case 'Manuals':
            return (
                <div
                    style={{
                        paddingTop: '20px',
                    }}
                >
                    <ManualsTab initialManual={selectedManual} />
                </div>
            );

        case 'Settings':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Settings Page</h1>
                    <h2>Coming Soon, Work in Progress</h2>
                </div>
            )

        case "Register":
            return (
                <RegisterPage
                    onRegisterSuccess={() => {
                        setActiveTab("Login") // after register, go to login page
                    }}
                />
            )

        case 'Login':
            return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />

        case 'Logout':
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>Logout</h1>
                    <button onClick={() => setIsLoggedIn(false)}>Confirm Logout</button>
                </div>
            )

        default:
            return (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        maxWidth: '1024px', // max width for large screens
                        margin: '0 auto',   // center horizontally
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>HTV Service Tool</h1>
                    <p>This should not be visible normally.</p>
                </div>
            )
    }
}
