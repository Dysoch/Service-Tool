//import { useState } from "react";

type TabType = 'FAQ' | 'Contact' | 'Settings' | 'Register' | 'Login' | 'Logout';

interface SideBarProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

export default function SideBar({ activeTab, onTabChange }: SideBarProps) {
    const tabs: { id: TabType; label: string; icon: string }[] = [
        { id: 'FAQ', label: 'FAQ', icon: '' },
        { id: 'Contact', label: 'Contact', icon: '' },
        { id: 'Settings', label: 'Settings', icon: '' },
        { id: 'Register', label: 'Register', icon: '' },
        { id: 'Login', label: 'Login', icon: '' },
        { id: 'Logout', label: 'Logout', icon: '' }
    ];

    return (
        <div style={{
            position: 'fixed',
            left: 0,
            top: '60px',
            width: '200px',
            height: 'calc(100vh - 60px)',
            backgroundColor: '#2a2a2a',
            borderRight: '1px solid #444',
            padding: '20px 0',
            zIndex: 999
        }}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 20px',
                        backgroundColor: activeTab === tab.id ? '#444' : 'transparent',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '16px'
                    }}
                >
                    <span>{tab.icon}</span>
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
