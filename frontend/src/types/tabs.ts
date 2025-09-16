export type TabType = 'FAQ' | 'Contact' | 'Manuals'  | 'Settings' | 'Register' | 'Login' | 'Logout'

export interface Tab {
  id: TabType
  label: string
  icon: string
  section: 'top' | 'bottom'
  visibleFor?: 'all' | 'loggedIn' | 'loggedOut'
}

export const tabs: Tab[] = [
    { id: 'FAQ', label: 'FAQ', icon: '❓', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Contact', label: 'Contact', icon: '📞', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Manuals', label: 'Manuals', icon: '📝', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Settings', label: 'Settings', icon: '⚙️', section: 'top', visibleFor: 'loggedIn' },
    { id: 'Register', label: 'Register', icon: '📝', section: 'bottom', visibleFor: 'loggedOut' },
    { id: 'Login', label: 'Login', icon: '🔑', section: 'bottom', visibleFor: 'loggedOut' },
    { id: 'Logout', label: 'Logout', icon: '🚪', section: 'bottom', visibleFor: 'loggedIn' },
  ]
