import type { TabType } from '../types/tabs'
import { ManualsTab, LoginPage, RegisterPage, ContactPage, FAQPage, SettingsPage, UserPage, CompanyPage, DefaultPage } from '../pages'
import { useState } from 'react'
import { t } from "../types/locale";
import { useLanguage } from "../context/LanguageContext";

interface ContentAreaProps {
    activeTab: TabType
    setIsLoggedIn: (val: boolean) => void
}

export default function ContentArea({ activeTab, setIsLoggedIn }: ContentAreaProps) {
    const [selectedManual] = useState<string | undefined>(undefined);
    const [_, setActiveTab] = useState<TabType>('Login')
    const { lang } = useLanguage();

    switch (activeTab) {
        case 'FAQ':
            return (<FAQPage />)

        case 'Contact':
            return (<ContactPage />)

        case 'Manuals':
            return ( <div style={{ paddingTop: '30px' }}> <ManualsTab initialManual={selectedManual} /> </div> );

        case 'User':
            return (<UserPage />)

        case 'Company':
            return (<CompanyPage />)

        case 'Settings':
            return (<SettingsPage />)

        case "Register":
            return ( <RegisterPage onRegisterSuccess={() => { setActiveTab("Login") }} /> )

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
                    <h1>{t(lang, "logout.logout")}</h1>
                    <button onClick={() => setIsLoggedIn(false)}>{t(lang, "logout.confirm")}</button>
                </div>
            )

        default:
            return <DefaultPage />
    }
}
