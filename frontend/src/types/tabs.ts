export type TabType = 'FAQ' | 'Contact' | 'Manuals' | 'User' | 'Company' | 'Settings' | 'Register' | 'Login' | 'Logout'

export interface Tab {
  id: TabType
  label: string
  icon: string
  section: 'top' | 'middle' | 'bottom'
  visibleFor?: 'all' | 'loggedIn' | 'Admin' | 'HTV' | 'loggedOut'
}

export const tabs: Tab[] = [
    { id: 'FAQ', label: 'FAQ', icon: '❓', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Contact', label: 'Contact', icon: '📞', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Manuals', label: 'Handleidingen', icon: '📝', section: 'top', visibleFor: 'loggedIn' },
    { id: 'User', label: 'User Info', icon: 'TBD x ', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Company', label: 'Company Info', icon: 'TBD x ', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Settings', label: 'Instellingen', icon: '⚙️', section: 'middle', visibleFor: 'loggedIn' },
    { id: 'Register', label: 'Register', icon: '📝', section: 'middle', visibleFor: 'loggedOut' },
    { id: 'Login', label: 'Login', icon: '🔑', section: 'bottom', visibleFor: 'loggedOut' },
    { id: 'Logout', label: 'Uitloggen', icon: '🚪', section: 'bottom', visibleFor: 'loggedIn' },
  ]
