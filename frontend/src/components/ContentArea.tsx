import type { TabType } from '../types/tabs';
import { ManualsTab, LoginPage, RegisterPage, ContactPage, FAQPage, SettingsPage, UserPage, CompanyPage, DefaultPage } from '../pages';
import { t } from "../types/locale";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../supabaseClient";

interface ContentAreaProps {
    activeTab: TabType;
    user: any | null;
    setUser: (user: any | null) => void;
    setActiveTab: (tab: TabType) => void;
}

export default function ContentArea({ activeTab, user, setUser, setActiveTab }: ContentAreaProps) {
    const { lang } = useLanguage();

    switch (activeTab) {
        case 'FAQ':
            return <FAQPage />;
        case 'Contact':
            return <ContactPage />;
        case 'Manuals':
            if (!user) {}
            return <div style={{ paddingTop: '30px' }}><ManualsTab /></div>;
        case 'User':
            return <UserPage />;
        case 'Company':
            return <CompanyPage />;
        case 'Settings':
            return <SettingsPage />;
        case 'Register':
            return <RegisterPage onRegisterSuccess={() => setActiveTab('Login')} />;
        case 'Login':
            return <LoginPage onLoginSuccess={async () => {
                const { data: { user } } = await supabase.auth.getUser();
                setUser(user);
                setActiveTab('Manuals');
            }} />;
        case 'Logout':
            return (
                <div style={{
                    padding: '20px',
                    width: '100%',
                    maxWidth: '1024px',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                }}>
                    <h1>{t(lang, "logout.logout")}</h1>
                    <button onClick={async () => {
                        await supabase.auth.signOut();
                        setUser(null);
                        setActiveTab('Login');
                    }}>
                        {t(lang, "logout.confirm")}
                    </button>
                </div>
            );
        default:
            return <DefaultPage />;
    }
}
