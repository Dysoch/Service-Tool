import { tabs } from '../types/tabs'
import type { TabType } from '../types/tabs'

interface SideBarProps {
    activeTab: TabType
    onTabChange: (tab: TabType) => void
    isLoggedIn: boolean
}

export default function SideBar({ activeTab, onTabChange, isLoggedIn }: SideBarProps) {
    // filter top tabs based on login state
    const topTabs = tabs.filter(
        (tab) =>
            tab.section === 'top' &&
            (tab.visibleFor === 'all' || (isLoggedIn && tab.visibleFor === 'loggedIn') || (!isLoggedIn && tab.visibleFor === 'loggedOut'))
    )

    // filter bottom tabs based on login state
    const bottomTabs = tabs.filter(
        (tab) =>
            tab.section === 'bottom' &&
            (tab.visibleFor === 'all' || (isLoggedIn && tab.visibleFor === 'loggedIn') || (!isLoggedIn && tab.visibleFor === 'loggedOut'))
    )

    const renderButton = (tab: typeof tabs[number]) => (
        <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
                width: '100%',
                textAlign: 'left',
                padding: '12px 20px',
                backgroundColor: activeTab === tab.id ? '#000000' : 'transparent',
                border: 'none',
                color: 'var(--htv-yellow)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '16px',
                boxShadow: activeTab === tab.id ? '0 0 12px rgba(250, 184, 1, 0.7)' : 'none',
            }}
        >
            <span>{tab.icon}</span>
            {tab.label}
        </button>
    )

    return (
        <div className="sidebar">
            <div>{topTabs.map(renderButton)}</div>
            <div>{bottomTabs.map(renderButton)}</div>
        </div>
    )
}
